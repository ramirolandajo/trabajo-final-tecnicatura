import {Image, Pressable, StyleSheet, View} from 'react-native'
import React from 'react'
import white_logo from "../../assets/images/whiteLogo.png"
import {colors} from "../global/colors";
import Constants from "expo-constants";
import {logout} from "../features/auth/authSlice";
import {deleteSession} from "../db";
import {useDispatch, useSelector} from "react-redux";
import {MaterialIcons} from "@expo/vector-icons";

export default function SecondaryHeader() {
    const {localId} = useSelector((state) => state.authReducer.value);
    const dispatch = useDispatch();

    async function onLogout() {
        dispatch(logout());
        await deleteSession({localId});
    }

    return (
        <View style={styles.container}>
            <View style={{width: 24, height: 24}}/>
            <Image source={white_logo} style={styles.logo}/>
            <Pressable onPress={() => onLogout()}>
                <MaterialIcons name="logout" size={30} color={colors.backgroundWhite}/>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    logo: {
        width: 55,
        height: 55,
    },
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 14,
        borderBottomWidth: 1,
        backgroundColor: colors.green600,
    }
})
