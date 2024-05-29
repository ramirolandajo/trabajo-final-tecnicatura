import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const Stack = createNativeStackNavigator();
export default function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Login"} component={Login}/>
            <Stack.Screen name={"Signup"} component={SignUp}/>
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({})
