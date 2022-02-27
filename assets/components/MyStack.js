import React from 'react';
import { Button, View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './SignIn';
import ListUsers from './ListUers';
import ForgotPassword from './ForgotPassword';
import Registration from './Registration';
import { useSelector } from 'react-redux';
import AuthReducers from '../store/reducer'
import { store } from '../store';


const Stack = createStackNavigator();
const MyStack=()=> {
  const token = useSelector(state=> state.AuthReducers.authToken);
  console.log('token: ', token)

  store.subscribe(()=> {
    console.log('State update', store.getState())
  })

  return (
    
    token===null ?
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Registration" component={Registration} />
      
    </Stack.Navigator>

    : <ListUsers />

   
  );
}


export default MyStack;