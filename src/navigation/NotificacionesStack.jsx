import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainHeader from "../components/MainHeader";
import NotificacionesScreen from "../screens/NotificacionesScreen";

const Stack = createNativeStackNavigator();

export default function NotificacionesStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => <MainHeader/>
            }}
        >
            <Stack.Screen
                name={"Notificaciones"}
                component={NotificacionesScreen}
            />
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({})
