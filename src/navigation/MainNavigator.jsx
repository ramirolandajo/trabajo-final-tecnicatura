import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";
import {StatusBar} from "expo-status-bar";
import {colors} from "../global/colors";

export default function MainNavigator() {
    const user = false;

    return (
        <NavigationContainer>
            {user? <TabNavigator/> : <AuthStack/>}
            <StatusBar backgroundColor={colors.green200}/>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({})
