import React from "react";
import { 
    View, 
    Text,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    StyleSheet, 
    TextInput,
    TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

const Registration = () => {
    return (
        <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior="height" style={styles.conatiner}>
                <TouchableOpacity>
                    <Icon style={{marginTop: 30, marginLeft: 10}} name="chevron-back" color={'#848484'} size={24}/>
                </TouchableOpacity>
                <Text style={styles.text}>Đăng ký</Text>
                <View>
                    <TextInput style={styles.textInput} placeholder="Họ và tên"/>
                    <TextInput style={styles.textInput} placeholder="Email"/>
                    <TextInput style={styles.textInput} placeholder="Số điện thoại"/>
                    <TextInput style={styles.textInput} placeholder="Mật khẩu" secureTextEntry/>
                    <TextInput style={styles.textInput} placeholder="Nhập lại mật khẩu" secureTextEntry/>
                </View>
                <TouchableOpacity style={styles.button}>
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
export default Registration;