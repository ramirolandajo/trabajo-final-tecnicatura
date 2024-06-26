import {StyleSheet, Text, View} from 'react-native'
import React, {useEffect} from 'react'
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";
import {StatusBar} from "expo-status-bar";
import {colors} from "../global/colors";
import {useDispatch, useSelector} from "react-redux";
import {fetchSession} from "../db";
import {setProfileImage, setUser, setUserData} from "../features/auth/authSlice";
import {useGetProfileImageQuery} from "../services/userService";
import {navigationRef} from "./RootNavigation";

export default function MainNavigator() {
    const {user, localId} = useSelector((state) => state.authReducer.value)
    const {data, error, isLoading} = useGetProfileImageQuery(localId);

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const session = await fetchSession();
                if (session?.rows.length) {
                    const userDb = session.rows._array[0];
                    const email = userDb.user
                    const idToken = userDb.token
                    const localId = userDb.localId
                    const nombreCompleto = userDb.nombreCompleto
                    const nombreUsuario = userDb.nombreUsuario
                    dispatch(setUser({email, idToken, localId}));
                    dispatch(setUserData({nombreCompleto, nombreUsuario}))
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
        <NavigationContainer ref={navigationRef}>
            {user? <TabNavigator/> : <AuthStack/>}
            <StatusBar backgroundColor={colors.green200}/>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({})
