import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import AuthReducers from '../store/reducer'
const ListUsers = ()=> {
    const DataUsers = useSelector(state=> state.AuthReducers.users);
    console.log(' list users: ', DataUsers)

    return(
        <View style={styles.container}>
            <Text>List Users</Text>
            <FlatList
                data={DataUsers}
                renderItem={({item})=>(
                    <View style={{backgroundColor: 'blue', marginTop: 20}}>
                        <Text>email: {item?.email}</Text>
                        <Text>password: {item?.password}</Text>
                    </View>
                )}
                keyExtractor={item => item.email}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})

export default ListUsers;