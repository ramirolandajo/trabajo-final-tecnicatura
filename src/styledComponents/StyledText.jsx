import {StyleSheet, Text} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";

export default function StyledText({
    children, letters_spaced, dark_green, light_green, capitalized, size16, size14, size20, size24, size28, size30, size36, numberOfLines, bold, semi_bold, style}) {
    const textStyle = [
        styles.general,
        light_green && styles.light_green,
        letters_spaced && styles.letters_spaced,
        dark_green && styles.dark_green,
        capitalized && styles.capitalized,
        bold && styles.bold,
        semi_bold && styles.semi_bold,
        size14 && styles.size14,
        size16 && styles.size16,
        size20 && styles.size20,
        size24 && styles.size24,
        size28 && styles.size28,
        size30 && styles.size30,
        size36 && styles.size36
    ]

    return (
        <Text numberOfLines={numberOfLines} style={[textStyle, {...style}]}>{children}</Text>
    )
}
const styles = StyleSheet.create({
    general: {
        fontSize: 24,
        fontFamily: "OpenSans",
    },
    light_green: {
        color: colors.green200
    },
    letters_spaced: {
        letterSpacing: 2
    },
    capitalized: {
        textTransform: "capitalize"
    },
    bold: {
        fontFamily: "OpenSansBold",
    },
    semi_bold: {
        fontFamily: "OpenSansSemiBold",
    },
    dark_green: {
        color: colors.green600
    },
    size14: {
        fontSize: 14
    },
    size16: {
        fontSize: 16
    },
    size20: {
        fontSize: 20
    },
    size28: {
        fontSize: 28
    },
    size30: {
        fontSize: 30
    },
    size36: {
        fontSize: 36
    }
})
