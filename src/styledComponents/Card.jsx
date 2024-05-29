import {StyleSheet, View} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";

export default function Card({children, style}) {
    return (
        <View style={{...styles.container, ...style}}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        marginVertical: 16,
        borderLeftColor: colors.green600,
        borderTopColor: colors.green600,
        borderRightColor: colors.green300,
        borderBottomColor: colors.green300,
        borderWidth: 5,
        padding: 5,
    }
})
