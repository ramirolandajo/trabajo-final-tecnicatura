import {Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";

export default function StyledButton({
    onPress, font_colored, filled, OpenSansBold, text, ...props
}) {
    const textStyles = [
        font_colored && styles.font_colored,
        filled && styles.filled,
        OpenSansBold && styles.OpenSansBold
    ]
    return (
        <Pressable onPress={onPress} style={[styles.generalButton, filled && styles.filled]}>
            <Text style={[textStyles, styles.generalText, {...props}]}>{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    generalButton: {
        height: 50,
        marginVertical: 16,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        borderColor: colors.green600,
        borderWidth: 2
    },
    font_colored: {
        color: colors.green500
    },
    filled: {
        backgroundColor: colors.green300
    },
    generalText: {
        fontSize: 24,
        fontFamily: "OpenSans"
    },
    OpenSansBold: {
        fontFamily: "OpenSansBold"
    }
})
