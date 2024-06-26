import {ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";
import Notificacion from "../components/Notificacion";
import StyledText from "../styledComponents/StyledText";

export default function NotificacionesScreen() {
    return (
        <StyledScreenWrapper>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StyledText size30 bold dark_green letters_spaced={2}>Notificaciones</StyledText>
                <Notificacion user={"Juanjo_123"} msj={'Le ha dado like a tu resenia'}/>
                <Notificacion user={"Cachito_123"} msj={'Le ha dado like a tu resenia'}/>
                <Notificacion user={"ego_ratatouille"} msj={'Te ha empezado a seguir'}/>
                <Notificacion user={"Luna_45"} msj={'Le ha dado like a tu reseña'}/>
                <Notificacion user={"Marcos_k"} msj={'Ha comentado en tu reseña'}/>
                <Notificacion user={"Sofi_09"} msj={'Te ha etiquetado en una reseña'}/>
                <Notificacion user={"Alex_Thunder"} msj={'Le ha dado like a tu reseña'}/>
                <Notificacion user={"GabiSmile"} msj={'Te ha empezado a seguir'}/>
                <Notificacion user={"Roberto_33"} msj={'Te ha etiquetado en una reseña'}/>
                <Notificacion user={"Valen_22"} msj={'Ha comentado en tu reseña'}/>
                <Notificacion user={"Natalia_R"} msj={'Le ha dado like a tu reseña'}/>
                <Notificacion user={"Carlos_Creativo"} msj={'Te ha empezado a seguir'}/>
                <Notificacion user={"AnaBella"} msj={'Te ha etiquetado en una reseña'}/>
            </ScrollView>
        </StyledScreenWrapper>
    )
}
const styles = StyleSheet.create({})
