import {Pressable, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {colors} from "../global/colors";
import Constants from "expo-constants";

export default function GenerarReseniaHeader({navigation, onSumbit}) {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate("Home")}>
                <MaterialCommunityIcons name="window-close" size={30} color="white" />
            </Pressable>
            <Pressable style={styles.subirButton} onPress={onSumbit}>
                <Text style={{fontSize: 16}}>Subir</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green600,
        paddingTop: Constants.statusBarHeight + 5,
        paddingBottom: 5,
        paddingHorizontal: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    subirButton: {
        backgroundColor: colors.green300,
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 100
    }
})
