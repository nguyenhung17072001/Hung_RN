import React, {useState, useEffect} from "react";
import { 
    View, 
    Text,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    StyleSheet, 
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, connect, useSelector } from "react-redux";
import { register } from "../store/action";

const Registration = ({navigation, registration}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    
    const dispatch = useDispatch();
    const submit = ()=>{
        registration(email, password,phonenumber,username)
        

       
        
    } 

    


    return (
        <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior="height" style={styles.conatiner}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Icon style={{marginTop: 30, marginLeft: 10}} name="chevron-back" color={'#848484'} size={24}/>
                </TouchableOpacity>
                <Text style={styles.text}>Đăng ký</Text>
                <View>
                    <TextInput style={styles.textInput} placeholder="Họ và tên" value={username} onChangeText={text=>setUsername(text)} />
                    <TextInput style={styles.textInput} placeholder="Email" value={email} onChangeText={text=>setEmail(text)}/>
                    <TextInput style={styles.textInput} placeholder="Số điện thoại" value={phonenumber} onChangeText={text=>setPhonenumber(text)}/>
                    <TextInput style={styles.textInput} placeholder="Mật khẩu" secureTextEntry value={password} onChangeText={text=>setPassword(text)}/>
                    <TextInput style={styles.textInput} placeholder="Nhập lại mật khẩu" secureTextEntry value={repassword} onChangeText={text=>setRepassword(text)}/>
                </View>
                <TouchableOpacity style={styles.button} onPress={submit}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Đăng ký</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        
    },
    text: {
        color: '#19769F',
        fontSize: 24,
        marginTop: 20,
        marginLeft: 20,
    },
    textInput: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#D5D5D5',
        borderRadius: 4,
        marginLeft: 20,
        marginRight: 20,
        height: 40,
        padding: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#19769F',
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        height: 41,
        borderRadius: 5,
    },
})

const mapStateToProps = state => {
    return {
      user: state.users
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      registration: (data) =>
        dispatch(register(data))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Registration)
