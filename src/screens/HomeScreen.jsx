import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Resenia from "../components/Resenia";

export default function HomeScreen() {
    return (
        <View>
            <Resenia id={1} titulo={"Ribs Kansas"} restaurante={"Kansas"}/>
        </View>
    )
}
const styles = StyleSheet.create({})
