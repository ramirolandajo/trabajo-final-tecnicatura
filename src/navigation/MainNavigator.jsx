import {StyleSheet, Text, View} from 'react-native'
import React, {useEffect} from 'react'
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";
import {StatusBar} from "expo-status-bar";
import {colors} from "../global/colors";
import {useDispatch, useSelector} from "react-redux";
import {fetchSession} from "../db";
import {setProfileImage, setUser} from "../features/auth/authSlice";
import {useGetProfileImageQuery} from "../services/userService";

export default function MainNavigator() {
    const {user, localId} = useSelector((state) => state.authReducer.value)
    const {data, error, isLoading} = useGetProfileImageQuery(localId);

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const session = await fetchSession();
                console.log(session)
                if (session?.rows.length) {
                    const user = session.rows._array[0];
                    console.log(session)
                    dispatch(setUser(user));
                }
            } catch (error) {
                console.log(error.message);
            }
        })();
    }, []);

    useEffect(() => {
        if (data) {
            dispatch(setProfileImage(data.image))
        }
    }, [data])

    return (
        <NavigationContainer>
            {user? <TabNavigator/> : <AuthStack/>}
            <StatusBar backgroundColor={colors.green200}/>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({})
