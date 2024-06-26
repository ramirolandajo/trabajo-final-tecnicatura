import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainHeader from "../components/MainHeader";
import HomeScreen from "../screens/HomeScreen";
import DetalleReseniaScreen from "../screens/DetalleReseniaScreen";
import BuscarScreen from "../screens/BuscarScreen";

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
            <Stack.Screen
                name={"DetalleResenia"}
                component={DetalleReseniaScreen}
            />
            <Stack.Screen
                name={"BuscarScreen"}
                component={BuscarScreen}
            />
            <Stack.Screen
                name={"SettingsScreen"}
                component={BuscarScreen}
            />
        </Stack.Navigator>
    )
}
