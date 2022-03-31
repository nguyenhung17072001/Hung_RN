import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AuthReducers from '../store/reducer'
import { logOut } from "../store/action";

const Home = ()=> {
    const name = useSelector(state=> state?.AuthReducers?.currentUser?.name)
    
    const dispatch = useDispatch()

    return(
        <View style={styles.container}>
            <Text style={{margin: 30}}>Login Successfull</Text>
            <Text>Đã đăng nhập bởi tài khoản tên {name}</Text>
            <TouchableOpacity style={styles.logoutButton} onPress={() => dispatch(logOut())}>
                <Text style={{color: 'white'}}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    logoutButton: {
        backgroundColor: '#19769F',
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
        height: 40,
    }
})

export default Home;