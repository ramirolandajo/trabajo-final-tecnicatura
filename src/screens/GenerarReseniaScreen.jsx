import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native'
import React from 'react'
import GenerarReseniaHeader from "../components/GenerarReseniaHeader";
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";
import {colors} from "../global/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function GenerarReseniaScreen({navigation}) {
    return (
        <>
            <GenerarReseniaHeader navigation={navigation}/>
            <StyledScreenWrapper noPadding>
                <TextInput placeholder={"Titulo"} style={[styles.titulo, styles.input]}/>
                <TextInput placeholder={"Restaurante"} style={[styles.restaurante, styles.input]}/>
                <View style={styles.cuerpoWrapper}>
                    <TextInput placeholder={"Cuerpo"} style={styles.cuerpo} multiline={true} maxLength={420}/>
                </View>
                <View style={styles.container}>
                    <Text style={styles.mainPuntuacion}>Puntuaciones</Text>
                    <View style={styles.puntuacionWrapper}>
                        <Text style={styles.puntuacion}>Platos</Text>
                        <TextInput placeholder={"1-10"} maxLength={2} keyboardType={"number-pad"}
                                   style={styles.puntaje}/>
                    </View>
                    <View style={styles.puntuacionWrapper}>
                        <Text style={styles.puntuacion}>Ambientacion</Text>
                        <TextInput placeholder={"1-10"} maxLength={2} keyboardType={"number-pad"}
                                   style={styles.puntaje}/>
                    </View>
                    <View style={styles.puntuacionWrapper}>
                        <Text style={styles.puntuacion}>Atencion al cliente</Text>
                        <TextInput placeholder={"1-10"} maxLength={2} keyboardType={"number-pad"}
                                   style={styles.puntaje}/>
                    </View>
                    <View style={styles.puntuacionWrapper}>
                        <Text style={styles.puntuacion}>Higiene y mantenimiento</Text>
                        <TextInput placeholder={"1-10"} maxLength={2} keyboardType={"number-pad"}
                                   style={styles.puntaje}/>
                    </View>
                    <View style={styles.puntuacionWrapper}>
                        <Text style={styles.puntuacion}>Seguridad</Text>
                        <TextInput placeholder={"1-10"} maxLength={2} keyboardType={"number-pad"}
                                   style={styles.puntaje}/>
                    </View>
                </View>
                <Pressable>
                    <MaterialCommunityIcons name="file-image-plus" size={50} color="black" style={{marginTop: 10, marginLeft: 10}}/>
                </Pressable>
            </StyledScreenWrapper>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: colors.green500,
        paddingHorizontal: 10
    },
    titulo: {
        fontSize: 30,
        height: 60,
    },
    restaurante: {
        fontSize: 24,
        height: 50
    },
    cuerpo: {
        fontSize: 16,
        paddingHorizontal: 10
    },
    cuerpoWrapper: {
        height: 180,
        borderBottomWidth: 1,
        borderColor: colors.green500
    },
    mainPuntuacion: {
        fontSize: 24,
        color: colors.green600
    },
    container: {
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: colors.green500,
    },
    puntuacionWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10
    },
    puntuacion: {
        fontSize: 20,
    },
    puntaje: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.green600,
        padding: 3,
        textAlign: "center",
        fontSize: 16
    }
})