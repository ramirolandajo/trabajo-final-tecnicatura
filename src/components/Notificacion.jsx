import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StyledText} from "../styledComponents/StyledText";
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";

export default function Notificacion({user,msj}){
    return(
        <StyledScreenWrapper>
            <View style={styles.notificacion}>
                <Text style={styles.texto}>{user}</Text>

                <Text style={styles.texto}>{msj}</Text>
            </View>
        </StyledScreenWrapper>
    )
}

const styles = StyleSheet.create({
    notificacion: {
        flexDirection: "row",
        paddingTop:10,
        paddingBottom:10,
        borderTopWidth:2,
        borderBottomWidth: 2
    },

    texto:{
        fontSize: 15,

    }
})