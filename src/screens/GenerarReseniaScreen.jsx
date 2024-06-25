import {Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import GenerarReseniaHeader from "../components/GenerarReseniaHeader";
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";
import {colors} from "../global/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useSelector} from "react-redux";
import {usePostReseniaMutation} from "../services/userService";
import StyledText from "../styledComponents/StyledText";
import * as ImagePicker from "expo-image-picker";

export default function GenerarReseniaScreen({navigation}) {
    const [titulo, setTitulo] = useState("");
    const [restaurante, setRestaurante] = useState("");
    const [cuerpo, setCuerpo] = useState("");
    const [puntajePlatos, setPuntajePlatos] = useState(0);
    const [puntajeAmbientaciones, setPuntajeAmbientaciones] = useState(0);
    const [puntajeAtencion, setPuntajeAtencion] = useState(0);
    const [puntajeHigiene, setPuntajeHigiene] = useState(0);
    const [puntajeSeguridad, setPuntajeSeguridad] = useState(0);
    const [triggerPostResenia, result] = usePostReseniaMutation();
    const [globalError, setGlobalError] = useState(false);
    const [reseniaSubida, setReseniaSubida] = useState(false);
    const [imagen, setImagen] = useState(null)

    const pickImageAsync = async () => {
        const isFileSystemOk = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (isFileSystemOk) {
            let resultFile = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                aspect: [9, 16],
                base64: true,
                quality: 1,
            });

            if (!result.canceled) {
                setImagen(resultFile.assets[0].uri);
            }
        }
    };

    const {user, localId, nombreCompleto, nombreUsuario} = useSelector((state) => state.authReducer.value)

    function handleSubmit() {
        const puntajeGeneral = ((puntajePlatos + puntajeAmbientaciones + puntajeAtencion + puntajeHigiene + puntajeSeguridad) / 5)
        console.log("Puntaje: " + puntajeGeneral)
        const resenia = {
            user,
            localId,
            nombreCompleto,
            nombreUsuario,
            titulo,
            restaurante,
            cuerpo,
            puntajePlatos,
            puntajeAmbientaciones,
            puntajeAtencion,
            puntajeHigiene,
            puntajeSeguridad,
            puntajeGeneral,
            imagen
        }
        triggerPostResenia(resenia)
    }

    useEffect(() => {
        if (result.error) {
            setGlobalError(true)
        }
        if (result.data) {
            setReseniaSubida(true)
            setTitulo("")
            setRestaurante("")
            setCuerpo("")
            setPuntajePlatos(0)
            setPuntajeAmbientaciones(0)
            setPuntajeAtencion(0)
            setPuntajeHigiene(0)
            setPuntajeSeguridad(0)
            setImagen(null)
        }
    }, [result]);

    useEffect(() => {
        if (reseniaSubida) {
            const timer = setTimeout(() => {
                setReseniaSubida(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [reseniaSubida]);

    return (
        <>
            {!globalError ? (
                !reseniaSubida ? (
                    <ScrollView>
                        <GenerarReseniaHeader navigation={navigation} onSumbit={() => handleSubmit()}/>
                        <StyledScreenWrapper noPadding>
                            <TextInput
                                placeholder={"Titulo"}
                                style={[styles.titulo, styles.input]}
                                onChangeText={text => setTitulo(text)}
                                value={titulo}
                            />
                            <TextInput
                                placeholder={"Restaurante"}
                                style={[styles.restaurante, styles.input]}
                                value={restaurante}
                                onChangeText={text => setRestaurante(text)}
                            />
                            <View style={styles.cuerpoWrapper}>
                                <TextInput
                                    placeholder={"Cuerpo"}
                                    style={styles.cuerpo}
                                    multiline={true}
                                    maxLength={420}
                                    value={cuerpo}
                                    onChangeText={text => setCuerpo(text)}
                                />
                            </View>
                            <View style={styles.container}>
                                <Text style={styles.mainPuntuacion}>Puntuaciones</Text>
                                <View style={styles.puntuacionWrapper}>
                                    <Text style={styles.puntuacion}>Platos</Text>
                                    <TextInput
                                        placeholder={"1-10"}
                                        maxLength={2}
                                        keyboardType={"number-pad"}
                                        style={styles.puntaje}
                                        value={puntajePlatos}
                                        onChangeText={text => setPuntajePlatos(parseInt(text))}
                                    />
                                </View>
                                <View style={styles.puntuacionWrapper}>
                                    <Text style={styles.puntuacion}>Ambientacion</Text>
                                    <TextInput
                                        placeholder={"1-10"}
                                        maxLength={2}
                                        keyboardType={"number-pad"}
                                        style={styles.puntaje}
                                        value={puntajeAmbientaciones}
                                        onChangeText={text => setPuntajeAmbientaciones(parseInt(text))}
                                    />
                                </View>
                                <View style={styles.puntuacionWrapper}>
                                    <Text style={styles.puntuacion}>Atencion al cliente</Text>
                                    <TextInput
                                        placeholder={"1-10"}
                                        maxLength={2}
                                        keyboardType={"number-pad"}
                                        style={styles.puntaje}
                                        value={puntajeAtencion}
                                        onChangeText={text => setPuntajeAtencion(parseInt(text))}
                                    />
                                </View>
                                <View style={styles.puntuacionWrapper}>
                                    <Text style={styles.puntuacion}>Higiene y mantenimiento</Text>
                                    <TextInput
                                        placeholder={"1-10"}
                                        maxLength={2}
                                        keyboardType={"number-pad"}
                                        style={styles.puntaje}
                                        value={puntajeHigiene}
                                        onChangeText={text => setPuntajeHigiene(parseInt(text))}
                                    />
                                </View>
                                <View style={styles.puntuacionWrapper}>
                                    <Text style={styles.puntuacion}>Seguridad</Text>
                                    <TextInput
                                        placeholder={"1-10"}
                                        maxLength={2}
                                        keyboardType={"number-pad"}
                                        style={styles.puntaje}
                                        value={puntajeSeguridad}
                                        onChangeText={text => setPuntajeSeguridad(parseInt(text))}
                                    />
                                </View>
                            </View>
                            <View style={{flexDirection: "row", gap: 20}}>
                                <Pressable onPress={() => pickImageAsync()}>
                                    <MaterialCommunityIcons name="file-image-plus" size={50} color="black"
                                                            style={{marginTop: 10, marginLeft: 10}}/>
                                </Pressable>
                                {imagen ? (
                                    <Image source={{uri: imagen}} style={{height: 250, width: 250}}/>
                                ) : null}
                            </View>
                        </StyledScreenWrapper>
                    </ScrollView>
                ) : (
                    <>
                        <StyledScreenWrapper align_center justify_center>
                            <StyledText size28 dark_green bold>Resenia subida con exito!</StyledText>
                        </StyledScreenWrapper>
                    </>
                )
            ) : (
                <>
                    <StyledScreenWrapper>
                        <Text>Error en el subido de la resenia</Text>
                    </StyledScreenWrapper>
                </>
            )}
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