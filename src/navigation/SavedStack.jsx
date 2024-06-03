import {StyleSheet} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainHeader from "../components/MainHeader";
import SavedScreen from "../screens/SavedScreen";

export default function SavedStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"Pin"}
                component={SavedScreen}
                options={{
                    header: () => <MainHeader/>
                }}
            />
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({})
