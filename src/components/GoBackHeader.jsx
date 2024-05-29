import {Pressable, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import {colors} from "../global/colors";
import Constants from "expo-constants";
import {useNavigationState} from "@react-navigation/native";

export default function GoBackHeader({navigation}) {
    const lastRoute = useNavigationState((state) => state.history)
    console.log(lastRoute)
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={30} color="white"/>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green600,
        paddingTop: Constants.statusBarHeight + 5,
        paddingBottom: 5,
        paddingHorizontal: 5
    }
})
