import React, { useEffect, useState } from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import  Header from '../../../components/Header/Index'
import PlusIcon from '../../../components/PlusIcon/Index'
import { ScrollView } from 'react-native-gesture-handler'
import Title from '../../../components/Title/Index'
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux'
import { setTasks, setToUpdate } from '../../../store/tasks'
import StatusCard from '../../../components/StatusCard'
import styles from './styles.'
import moment from 'moment'

const Home = ({navigation}) => {
    const user = useSelector(state => state.user.data)
    const toUpdate = useSelector(state => state.tasks.toUpdate)
    const tasks = useSelector(state => state.tasks.data)
    const [counts, setCounts] = useState({});
    const dispatch = useDispatch()
    
    useEffect(() => {
        firestore()
        .collection('Tasks')
        .where('userId','==',user.uid)
        .get()
        .then(querySnapshot => {
          const tasksList = [];
          querySnapshot.forEach(documentSnapshot => {
            tasksList.push({
              uid: documentSnapshot.id,
              ...(documentSnapshot.data() || {}),
            });
          });
  
          dispatch(setTasks(tasksList));
        });
     
      }, [user, toUpdate, dispatch]);

      useEffect(() => {
        if (tasks?.length) {
          const highPriority = tasks?.filter(
            task => task?.getCategories === 'urgent' || task?.getCategories === 'important',
          );
          const today = moment(new Date()).format('YYYY-MM-DD');
          const dueDeadline = tasks?.filter(task => {
            const deadline = task?.deadline?.seconds * 1000;
            const deadlineFormatted = moment(deadline).format('YYYY-MM-DD');
            return moment(deadlineFormatted).isBefore(today);
          });
          const quickWin = tasks?.filter(task => task?.getCategories === 'quick_start');
    
          setCounts({
            highPriority: highPriority?.length,
            dueDeadline: dueDeadline?.length,
            quickWin: quickWin?.length,
          });
        }
      }, [tasks]);
    
    return(
        <View style={{width:'100%',flex: 1}}>
            <Header title = "Home" />
            <ScrollView>
             <Title type="thin">Daily Tasks:</Title>
             <View style={styles.row}>
             <StatusCard label='High Priority' count={counts?.highPriority}/>
             <StatusCard label='Due Deadline' type='error' count={counts?.deadline}/>
             <StatusCard label='Quick Win' count={counts?.quickWin} />
             </View>
             <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Tasks')}>
          <Text style={styles.title}>Check all my tasks</Text>
          <Text style={styles.subtitle}>
            See all tasks and filter them by categories you have selected when
            creating them
          </Text>
        </TouchableOpacity>
              
            </ScrollView>
            
            <PlusIcon />
        </View>
    )
}

export default React.memo(Home)