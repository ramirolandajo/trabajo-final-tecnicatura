import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainHeader from "../components/MainHeader";
import AjustesScreen from "../screens/AjustesScreen";

const Stack = createNativeStackNavigator();

export default function AjustesStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => <MainHeader/>
            }}
        >
            <Stack.Screen
                name={"Ajustes"}
                component={AjustesScreen}
            />
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({})
