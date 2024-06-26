import React from 'react'
import StyledButton from '../styledComponents/StyledButton'
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";

export default function SettingsScreen() {
    return (
        <StyledScreenWrapper>
            <StyledButton text={"Guardado"} filled/>
            <StyledButton text={"Tu Actividad"}/>
            <StyledButton text={"Notificaciones"} filled/>
            <StyledButton text={"Tiempo en la App"}/>
            <StyledButton text={"Reglas de Privacidad"} filled/>
            <StyledButton text={"Perfiles bloqueados"}/>
        </StyledScreenWrapper>
    )
}

