import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './src/Routes';
import { Provider } from 'react-redux'
import store from './src/store';

const Stack = createStackNavigator();

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFFFFF',
    },
  };
  return (
    <Provider store={store}>
    <NavigationContainer theme={theme}>
      <Routes />
    </NavigationContainer>
    </Provider>
  )
}

export default App;
 