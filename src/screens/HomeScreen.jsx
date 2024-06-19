import {FlatList, StyleSheet} from 'react-native'
import React, {useEffect, useState} from 'react'
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";
import ReseniaCard from "../components/ReseniaCard";
import {useDispatch, useSelector} from "react-redux";
import {useGetReseniasQuery, useGetUserDataQuery} from "../services/userService";
import {insertUserData} from "../db";
import {setUserData} from "../features/auth/authSlice";
import {useFocusEffect} from "@react-navigation/native";
import StyledText from "../styledComponents/StyledText";

export default function HomeScreen({navigation}) {
    const {user, localId, token} = useSelector((state) => state.authReducer.value);
    const {data: userData} = useGetUserDataQuery(localId);
    const {data: reseniasData, refetch} = useGetReseniasQuery();
    const [resenias, setResenias] = useState([]);

    const dispatch = useDispatch();

    useFocusEffect(() => {
        refetch()
    })

    useEffect(() => {
        if (userData) {
            const {nombreCompleto, nombreUsuario} = {...userData}
            dispatch(setUserData({nombreCompleto, nombreUsuario}))
            insertUserData({
                nombreCompleto: nombreCompleto,
                nombreUsuario: nombreUsuario,
                localId: localId
            }).catch(err => console.log(err));
        }
    }, [userData]);

    useEffect(() => {
        if (reseniasData) {
            const reseniasRaw = Object.values(reseniasData)
            setResenias(reseniasRaw)
        }
    }, [reseniasData]);

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
            {!reseniasData? (
                <StyledText>No hay resenias para mostrar...</StyledText>
            ):(
                <FlatList
                    data={resenias}
                    renderItem={({item}) => (
                        <ReseniaCard navigation={navigation} resenia={item}/>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </StyledScreenWrapper>
    )
}
const styles = StyleSheet.create({})
