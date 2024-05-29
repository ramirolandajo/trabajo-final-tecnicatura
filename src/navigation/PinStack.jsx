import {StyleSheet} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainHeader from "../components/MainHeader";
import PinScreen from "../screens/PinScreen";

export default function PinStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"Pin"}
                component={PinScreen}
                options={{
                    header: () => <MainHeader/>
                }}
            />
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({})
