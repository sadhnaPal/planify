import React, { useState } from 'react'
import { View ,Text, SafeAreaView, ScrollView, Pressable, Alert, ActivityIndicator} from 'react-native'
import styles from './styles'
import PlusIcon from '../../../components/PlusIcon/Index'
import { Image } from 'react-native'
import Title from '../../../components/Title/Index'
import Input from '../../../components/Input'
import colors from '../../../constant/colors'
import { categories } from '../../../constant/categories'
import Categories from '../../../components/Categories/Index'
import DateInput from '../../../components/DateInput/Index'
import Button from '../../../components/Button'
import moment from 'moment'
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux'
import { setToUpdate } from '../../../store/tasks'

const AddTasks = ({navigation}) => {
    const user = useSelector(state => state.user.data)
    const [getCategories, setCategories] = useState();
    const [title, setTitle] = useState('')
    const [deadline, setDeadline] = useState(new Date())
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const handleBack = () => {
     navigation.goBack()
    }

    const Submit = () =>{
        const today = moment(new Date()).format('YYYY-MM-DD')
        const deadlineFormatted = moment(deadline).format('YYYY-MM-DD')
        if(!title){
            Alert.alert("Please ennter the task tiitle")
            return
        }
         if(moment(deadlineFormatted).isBefore(today)){
             Alert.alert('please select a future date')
             return
         }
        setLoading(true)
        firestore()
        .collection('Tasks')
        .add({
              title,
              deadline,
              getCategories,
              checked: false,
              userId: user?.uid
           })
        .then(() => {
            setLoading(false)
            dispatch(setToUpdate())
            setTitle('')
            setDeadline(new Date())
            setCategories(null)
            navigation.navigate('Tasks')

        }).catch(e => {
         console.log("error", e)
         setLoading(false)
        })

    }

    return(
        <SafeAreaView style = {styles.container}>
            <Pressable style={styles.backContainer} hitSlop={8} onPress={handleBack}>
            <Image style={styles.backIcon} source={require('../../../assests/back_icon.png')} />
            </Pressable>
            <Title type="thin">Add New Task</Title>
            <Text style={styles.lable}>Describe the task</Text>
            <Input value={title} onChangeText={setTitle} outlined placeholder='Type here...'></Input>
            <Text style={[styles.lable, {marginTop: 20}]}>Type</Text>
            <Categories categories={categories} selectedCategory={getCategories} onCategoryPress={setCategories} />
            <Text style={styles.lable}>Deadline</Text>
            <DateInput value={deadline} onChange={setDeadline} />
            { loading ? (
                <ActivityIndicator />
            ) : (
                <Button style={styles.button} type='blue' onPress={Submit}>Add to task</Button>
            )}
           
        </SafeAreaView>
    )
}

export default React.memo(AddTasks)