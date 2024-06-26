import React from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'
import StyledButton from '../styledComponents/StyledButton'

function SettingsScreen() {
  return (
    <View>
        <View style={styles.container}>
            <Feather name="settings" size={32} color={colors.green500}/>
            <Image source={green_logo} style={styles.logo}/>
            <Feather name="search" size={34} color={colors.green500}/>
        </View>
        <StyledButton text={"Guardado"}/>
        <StyledButton text={"Tu Actividad"}/>
        <StyledButton text={"Notificaciones"}/>
        <StyledButton text={"Tiempo en la App"}/>
        <StyledButton text={"Reglas de Privacidad"}/>
        <StyledButton text={"Perfiles bloqueados"}/>
    </View>
  )
}

const styles = StyleSheet.create({
    logo: {
        width: 55,
        height: 55,
    },
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 14,
        borderBottomWidth: 1,
        borderColor: colors.green500
    }
})

export default SettingsScreen
