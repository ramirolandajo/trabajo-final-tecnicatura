import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";
import StyledButton from "../styledComponents/StyledButton";

export default function EditarPerfilScreen({navigation}) {
    return (
        <StyledScreenWrapper align_center justify_center>
            <StyledButton text={"Cambiar foto perfil"} filled onPress={() => navigation.navigate("CambiarFotoPerfil")}/>
            <StyledButton text={"Cambiar nombre usuario"} filled/>
        </StyledScreenWrapper>
    )
}
const styles = StyleSheet.create({})
