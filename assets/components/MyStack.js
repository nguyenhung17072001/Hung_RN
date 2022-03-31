import React, {useState, useEffect} from 'react';
import { Button, View, Text, Alert } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './SignIn';
import Home from './Home';
import ForgotPassword from './ForgotPassword';
import Registration from './Registration';
import { useSelector } from 'react-redux';
import AuthReducers from '../store/reducer'
import { store } from '../store';



const Stack = createStackNavigator();
const MyStack=()=> {
  


  const auth = useSelector(state=> state?.AuthReducers)
  console.log('auth: ', auth)  
  const currentUser = useSelector(state=> state?.AuthReducers?.currentUser)
  const err = useSelector(state=> state?.AuthReducers?.error)
  /* store.subscribe(()=> {
    console.log('State update', store.getState())
  })  */

  if(currentUser !== null && err===null) {
    
    return( <Home />)
  }
  else {
    
    return(
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Registration" component={Registration} />
      
    </Stack.Navigator>
    )
  }
  
}


export default MyStack;