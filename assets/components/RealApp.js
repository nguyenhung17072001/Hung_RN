import React, {useState, useRef, useEffect} from "react";
import { 
    View, 
    Text, 
    StyleSheet ,
    SafeAreaView, 
} from "react-native";

const RealApp =()=> {
    return(
       <View style={styles.container}>
           <Text>My App</Text>
       </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default RealApp;