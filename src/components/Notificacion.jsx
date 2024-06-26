import React from 'react';
import {StyleSheet, View} from 'react-native';
import StyledText from "../styledComponents/StyledText";
import {colors} from "../global/colors";

export default function Notificacion({user, msj}) {
    return (
        <View style={styles.conteiner}>
            <View style={styles.notificacion}>
                <StyledText bold size20>{user}</StyledText>
                <StyledText size20>{msj}</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: colors.green300,
        borderBottomColor: colors.green300,
        paddingVertical: 10
    },
    notificacion: {
        gap: 10,
        height: 70,
        justifyContent: "center",
        backgroundColor: colors.green200,
        padding: 16,
        borderRadius: 10
    }
})