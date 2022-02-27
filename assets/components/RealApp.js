import React, {useState, useRef, useEffect} from "react";
import { 
    View, 
    Text, 
    StyleSheet ,
    SafeAreaView, 
} from "react-native";


import SignIn from "./SignIn";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";

const RealApp =()=> {
    return(
        
        <SignIn/>
       
       
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