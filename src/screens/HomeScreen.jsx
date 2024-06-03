import {FlatList, StyleSheet} from 'react-native'
import React from 'react'
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";
import ReseniaCard from "../components/ReseniaCard";
import {colors} from "../global/colors";

export default function HomeScreen({navigation}) {

    const fakeData = [
        {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        },
        {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        },        {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        },        {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        },        {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        },        {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        },        {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        },        {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        },        {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        },        {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        },        {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        },
    ]


    return (
        <StyledScreenWrapper>
            <FlatList
                data={fakeData}
                renderItem={({item}) => (
                <ReseniaCard navigation={navigation} resenia={item} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </StyledScreenWrapper>
    )
}
const styles = StyleSheet.create({})
