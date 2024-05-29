import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import GenerarReseniaScreen from "../screens/GenerarReseniaScreen";

const Stack = createNativeStackNavigator();

export default function GenerarReseniaStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name={"GenerarResenia"}
                component={GenerarReseniaScreen}
            />
        </Stack.Navigator>
    )
}
