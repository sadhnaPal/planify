import React, { useContext, useState, useEffect } from 'react';
import Onboarding from './screens/auth/Onboarding';
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import { Image, StyleSheet, Text, View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/app/Home/Index'
import Tasks from './screens/app/Tasks/Index'
import AddTasks from './screens/app/AddTasks/Index'
import DrawerContent from  './components/DrawerContent/Index'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Routes = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
 
  const Tabs = () => {
    return(
      <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown:false}}>
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({focused}) => (
        <Image style={styles.icons} source= { focused ? 
          require('./assests/home_active.png') : 
          require('./assests/home_inactive.png')} />
      )}} />
      <Tab.Screen name="Tasks" component={Tasks} options={{ tabBarIcon: ({focused}) => (
        <Image style={styles.icons} source= { focused ? 
          require('./assests/task_active.png') : 
          require('./assests/task_inactive.png')} />
      )}} />
    </Tab.Navigator>
    )
  }
  if(user){
    return(
      <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="AddTask" component={AddTasks} />
      </Drawer.Navigator>
     
    )
  }

  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Onboarding' component={Onboarding}/>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='AddTask' component={AddTasks} />
        <Stack.Screen name='Tasks' component={Tasks} />
      </Stack.Navigator>

  )
}

const styles = StyleSheet.create({
  icons: {
    width: 24,
    height: 24
  }
})

export default React.memo(Routes);
