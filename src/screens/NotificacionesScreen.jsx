import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";
import Notificacion from "../components/Notificacion";

export default function NotificacionesScreen() {
    return (
        <StyledScreenWrapper>

            <Notificacion
                user={"Juan"}
                msj={"le ha dado like a tu reseña"}
            />

            <Notificacion
                user={"Lucas"}
                msj={" ha comentado tu reseña"}
            />


            <Notificacion
                user={"Martina"}
                msj={" ha comenzado a seguirte"}
            />

            <Notificacion
                user={"Sebas"}
                msj={" le ha dado like a tu comentario"}
            />

            <Notificacion
                user={"Selena"}
                msj={" ha comenzado a seguirte"}
            />

            <Notificacion
                user={"Mateo"}
                msj={" ha comentado tu reseña"}
            />

            <Notificacion
                user={"Valentin"}
                msj={" le ha dado like a tu reseña"}
            />

            <Notificacion
                user={"Mati"}
                msj={" ha comenzado a seguirte"}
            />

            <Notificacion
                user={"Ivo"}
                msj={" le ha dado like a tu comentario"}
            />
            
        </StyledScreenWrapper>
    )
}
const styles = StyleSheet.create({
    contenedor:{
        paddingTop:10

    }
})
