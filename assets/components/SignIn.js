import React, {useState, useEffect} from "react";
import { 
    View, 
    Text, 
    KeyboardAvoidingView, 
    StyleSheet, 
    TextInput, 
    Dimensions, 
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome'
import IconEntypo from 'react-native-vector-icons/Entypo'
import {Login} from '../store/action'
import { connect, useSelector, useDispatch } from 'react-redux'
import AuthReducers from "../store/reducer";


const {height, width} = Dimensions.get('window');
const SignIn =({navigation, login})=> {
    const state = useSelector((state)=>state)
    
    const [remember, setRemember] = useState(true)
    const rememberClick = ()=> {
        setRemember(!remember);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    
    
    const message = useSelector(state=> state?.AuthReducers?.currentUser?.message)
    
    const err = useSelector(state=> state?.AuthReducers?.error)
    
    
    const submit =()=> {
        login({email, password})
        console.log('state: ', state)
        
        if(email==='') {
          Alert.alert('Bạn chưa nhập email')
        }
        else if(password==='') {
          Alert.alert('Bạn chưa nhập mật khẩu')
        }
        
    }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.container}>
          <View>
            <Text style={styles.text}>Đăng nhập</Text>
            <TextInput
              style={styles.textInput}
              placeholder="E-mail"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Mật khẩu"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <View
              style={{
                marginLeft: 20,
                marginTop: 20,
                marginRight: 40,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={rememberClick} activeOpacity={1}>
                  <View
                    style={[
                      styles.remember,
                      {
                        backgroundColor: remember ? "#19769F" : "#D5D5D5",
                      },
                    ]}
                  />
                </TouchableOpacity>
                <Text style={{ marginLeft: 4 }}>Ghi nhớ</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text>Quên mật khẩu</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={submit}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                Đăng nhập
              </Text>
            </TouchableOpacity>
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              Hoặc bằng
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 20,
                marginLeft: 20,
              }}
            >
              <TouchableOpacity style={styles.accButton}>
                <Icon name="facebook" size={20} color="#194A9F" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.accButton}>
                <IconEntypo name="google-" size={20} color="#FF4141" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ fontSize: 14, color: "#95989A" }}>
              Bạn chưa có tài khoản?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={{ color: "#19769F", fontSize: 14 }}>
                Tạo tài khoản ngay
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    text: {
        color: '#19769F',
        fontSize: 24,
        
        marginLeft: 20,
    },
    textInput: {
        marginTop: 40,
        borderWidth: 1,
        borderColor: '#D5D5D5',
        borderRadius: 4,
        marginLeft: 20,
        marginRight: 20,
        height: 40,
        padding: 10,
    },
    remember: {
        height: 15,
        width: 15, 
        borderRadius: 10, 
        borderWidth: 2,
        borderColor: '#D5D5D5',
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
    accButton: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: width/2-25,
        height: 40,
        borderWidth: 1,
        borderColor: '#D5D5D5',
        borderRadius: 5,
        
    }
})

const mapStateToProps = state => {
    return {
      user: state.users
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      login: (data) =>
        dispatch(Login(data))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignIn)
  
  