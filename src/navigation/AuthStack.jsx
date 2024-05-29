import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

export default function AuthStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name={"Login"} component={Login}/>
            <Stack.Screen name={"SignUp"} component={SignUp}/>
        </Stack.Navigator>
    )
}