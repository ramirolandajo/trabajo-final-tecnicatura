import {Image, ScrollView, StyleSheet, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import StyledText from "../styledComponents/StyledText";
import {colors} from "../global/colors";
import profile_icon from "../../assets/images/profile_icon_placeholder.png";
import {useGetProfileImageQuery} from "../services/userService";

export default function DetalleReseniaCard({resenia}) {
    const {data} = useGetProfileImageQuery(resenia.localId);
    const [profileImage, setProfileImage] = useState(null);

    useEffect(() => {
        if (data) {
            setProfileImage(data.image)
        }
    }, [data])

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.card}>
                <Image style={styles.imagen} source={{uri: resenia.imagen}}/>
                <View style={styles.userContainer}>
                    {profileImage ? (
                        <Image source={{uri: profileImage}} style={styles.profileIcon}/>
                    ) : (
                        <Image source={profile_icon} style={styles.profileIcon}/>
                    )}
                    <View>
                        <StyledText size16 bold>{resenia.nombreCompleto}</StyledText>
                        <StyledText size14>@{resenia.nombreUsuario}</StyledText>
                    </View>
                </View>
                <View style={styles.body}>
                    <StyledText size30 style={styles.nombre}>{resenia.titulo}</StyledText>
                    <StyledText size24 style={styles.tipo}>{resenia.restaurante}</StyledText>
                    <StyledText size20 style={styles.tipo}>{resenia.cuerpo}</StyledText>
                    <StyledText size24 bold style={styles.tipo}>Puntaje General: {resenia.puntajeGeneral}</StyledText>
                    <StyledText size16>Puntaje Platos: {resenia.puntajePlatos}</StyledText>
                    <StyledText size16>Puntaje Ambientacion: {resenia.puntajeAmbientaciones}</StyledText>
                    <StyledText size16>Puntaje Atencion: {resenia.puntajeAtencion}</StyledText>
                    <StyledText size16>Puntaje Higiene: {resenia.puntajeHigiene}</StyledText>
                    <StyledText size16>Puntaje Seguridad: {resenia.puntajeSeguridad}</StyledText>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 16,
        flexGrow: 1,
    },
    card: {
        borderRadius: 15,
        borderColor: colors.green500,
        borderWidth: 2,
        backgroundColor: colors.green100,
        flex: 1,
        marginBottom: 20
    },
    body: {
        padding: 16,
    },
    imagen: {
        width: "100%",
        height: 250,
        resizeMode: "cover",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    nombre: {
        textAlign: "center"
    },
    tipo: {
        paddingVertical: 10
    },
    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 4000
    },
    userContainer: {
        padding: 20,
        flexDirection: "row",
        gap: 20
    }
})
