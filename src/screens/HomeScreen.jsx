import {FlatList, StyleSheet} from 'react-native'
import React, {useEffect} from 'react'
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";
import ReseniaCard from "../components/ReseniaCard";
import {useDispatch, useSelector} from "react-redux";
import {useGetUserDataQuery} from "../services/userService";
import {insertSession} from "../db";
import {setUserData} from "../features/auth/authSlice";

export default function HomeScreen({navigation}) {
    const {user, localId, token} = useSelector((state) => state.authReducer.value);
    const {data} = useGetUserDataQuery(localId);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) {
            const {nombreCompleto, nombreUsuario} = {...data}
            dispatch(setUserData({nombreCompleto, nombreUsuario}))
            console.log({user, localId, token, nombreCompleto, nombreUsuario})
            insertSession({
                user: user,
                localId: localId,
                token: token,
                nombreCompleto: nombreCompleto,
                nombreUsuario: nombreUsuario
            }).catch(err => console.log(err));
        }
    }, [data]);

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
        }, {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        }, {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        }, {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        }, {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        }, {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        }, {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        }, {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        }, {
            "usuarioId": 12345,
            "titulo": "Excelente experiencia culinaria",
            "restaurante": "La Casa del Sabor",
            "cuerpo": "La comida estuvo deliciosa, el servicio fue rápido y el ambiente muy acogedor. Recomiendo probar las enchiladas y los tacos al pastor. Además, las margaritas estaban exquisitas y perfectamente balanceadas. El personal fue muy amable y atento, siempre pendiente de nuestras necesidades. El lugar es ideal tanto para cenas románticas como para reuniones con amigos. Definitivamente volveré pronto.",
            "puntajeTotal": 9.5
        }, {
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
                    <ReseniaCard navigation={navigation} resenia={item}/>
                )}
                showsVerticalScrollIndicator={false}
            />
        </StyledScreenWrapper>
    )
}
const styles = StyleSheet.create({})
