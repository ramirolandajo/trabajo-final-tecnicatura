import {Image, Pressable, StyleSheet, View} from 'react-native'
import React from 'react'
import green_logo from "../../assets/images/greenLogo.png"
import {colors} from "../global/colors";
import {Feather} from "@expo/vector-icons";
import Constants from "expo-constants";
import * as RootNavigation from '../navigation/RootNavigation';

export default function MainHeader() {
    return (
        <View style={styles.container}>
            <Feather name="settings" size={32} color={colors.green500}/>
            <Image source={green_logo} style={styles.logo}/>
            <Pressable onPress={() => RootNavigation.navigate("BuscarScreen")}>
                <Feather name="search" size={34} color={colors.green500}/>
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
        borderColor: colors.green500
    }
})
