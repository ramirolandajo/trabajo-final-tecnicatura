import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainHeader from "../components/MainHeader";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => <MainHeader/>
            }}
        >
            <Stack.Screen
                name={"Home"}
                component={HomeScreen}
            />
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({})
