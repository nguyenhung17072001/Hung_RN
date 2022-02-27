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

const ForgotPassword = ({navigation}) => {
    return (
        <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior="height" style={styles.conatiner}>
                <TouchableOpacity onPress={()=> navigation.goBack()} activeOpacity={1} >
                    <Icon style={{marginTop: 30, marginLeft: 10, color: '#95989A'}} name="chevron-back" color={'#848484'} size={24}/>
                </TouchableOpacity>
                <Text style={styles.text}>Quên mật khẩu</Text>
                <Text style={{margin: 20, marginTop: 10, color: '#95989A', fontSize: 12}}>Nhập email của bạn để khôi phục mật khẩu.</Text>
                <View>
                    <TextInput style={styles.textInput} placeholder="Email"/>
                    
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Yêu cầu khôi phục</Text>
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
export default ForgotPassword ;