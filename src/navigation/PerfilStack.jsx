import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import PerfilScreen from "../screens/PerfilScreen";
import MainHeader from "../components/MainHeader";
import GoBackHeader from "../components/GoBackHeader";
import SecondaryHeader from "../components/SecondaryHeader";
import EditarPerfilScreen from "../screens/EditarPerfilScreen";
import CambiarFotoPerfilScreen from "../screens/CambiarFotoPerfilScreen";

export default function PerfilStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            header: () => <SecondaryHeader/>
        }}>
            <Stack.Screen name={"Perfil"} component={PerfilScreen}/>
            <Stack.Screen name={"EditarPerfil"} component={EditarPerfilScreen}/>
            <Stack.Screen name={"CambiarFotoPerfil"} component={CambiarFotoPerfilScreen}/>
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({})
