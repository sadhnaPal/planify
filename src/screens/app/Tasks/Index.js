import React, { useEffect, useState } from 'react'
import { View ,Text, FlatList} from 'react-native'
import Header from '../../../components/Header/Index'
import PlusIcon from '../../../components/PlusIcon/Index'
import Title from '../../../components/Title/Index'
import { useDispatch, useSelector } from 'react-redux'
import CustomCheckbox from '../../../components/CustomCheckbox/index'
import styles from './styles'
import { categories } from '../../../constant/categories'
import Categories from '../../../components/Categories/Index'
import firestore from '@react-native-firebase/firestore';
import { setToUpdate } from '../../../store/tasks'

const Task = () => {
    const tasks = useSelector(state => state.tasks.data)
    const [getCategories, setCategories] = useState();
    const dispatch = useDispatch()
    const [filterTask, setFilterTask] = useState([])

    useEffect(() => {
        if(getCategories && getCategories !== 'all'){
            const filtered = tasks?.filter(task => task?.getCategories === getCategories)
            setFilterTask(filtered)
        }else{
            setFilterTask(tasks)
        }
    },[getCategories,tasks])
    const onTaskUpdate = item => {
        firestore()
        .collection('Tasks')
        .doc(item?.uid)
        .update({
          checked: !item.checked,
         })
        .then(() => {
            dispatch(setToUpdate())
        });

    };

    const renderTask = ({ item }) => {
        return(
            <View style={styles.row}>
                 <CustomCheckbox checked={item.checked} onPress={() => onTaskUpdate(item)} />
                 <Text style={styles.taskText}>{item?.title}</Text>
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <Header title="Task" />
            <FlatList
            ListHeaderComponent={
            <View style={{marginBottom: 24}}>
            <Title type="thin">To Do Tasks</Title>
            <Categories categories={[{label: 'All', value: 'all'}, ...categories]} selectedCategory={getCategories} onCategoryPress={setCategories} />
            </View>
             } 
            data={filterTask} 
            renderItem={renderTask} 
            keyExtractor={item => String(item?.uid)}/>
            <PlusIcon/>
                       
        </View>
    )
}

export default React.memo(Task)