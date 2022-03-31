import axios from 'axios'
import { Alert } from 'react-native';

export const logIn = async (email, password) => {
    const response = await axios.post('http://restapi.adequateshop.com/api/authaccount/login', {
      email,
      password,
    });
    if(response.data.data===null) {
        Alert.alert('Email hoặc mật khẩu sai')
    }
    //console.log('response: ', response)
    return { 
        token: response.data.data.Token,
        name: response.data.data.Name,
        message: response.data.message,
    }; 
  
  };