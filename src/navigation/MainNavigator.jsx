import {StyleSheet, Text, View} from 'react-native'
import React, {useEffect} from 'react'
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";
import {StatusBar} from "expo-status-bar";
import {colors} from "../global/colors";
import {useDispatch, useSelector} from "react-redux";
import {fetchSession} from "../db";
import {setUser} from "../features/auth/authSlice";

export default function MainNavigator() {
    const {user, localId} = useSelector((state) => state.authReducer.value)

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const session = await fetchSession();
                if (session?.rows.length) {
                    const user = session.rows._array[0];
                    dispatch(setUser(user));
                }
            } catch (error) {
                console.log(error.message);
            }
        })();

    }, []);

    return (
        <NavigationContainer>
            {user? <TabNavigator/> : <AuthStack/>}
            <StatusBar backgroundColor={colors.green200}/>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({})
