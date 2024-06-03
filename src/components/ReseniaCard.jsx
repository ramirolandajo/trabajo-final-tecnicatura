import {Image, Pressable, StyleSheet, View} from 'react-native'
import React, {useState} from 'react'
import profile_icon from "../../assets/images/profile_icon_placeholder.png";
import {colors} from "../global/colors";
import StyledText from "../styledComponents/StyledText";
import {AntDesign, FontAwesome, FontAwesome5} from "@expo/vector-icons";

export default function ReseniaCard({resenia, navigation}) {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    const {usuarioId, titulo, restaurante, cuerpo, puntajeTotal} = {...resenia}

    //llamada a la BD para obtener el usuario

    function handleLike() {
        setLiked(!liked);
        //hablar con la BD por el like
    }

    function handleSaved() {
        setSaved(!saved);
        //hablar con la BD por el guardado
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate("DetalleResenia")}>
                <View style={styles.userContainer}>
                    <Image source={profile_icon} style={styles.profileIcon}/>
                    <View>
                        <StyledText size16 bold>Nombre usuario</StyledText>
                        <StyledText size14>@tag_usuario</StyledText>
                    </View>
                </View>
            </Pressable>
            <View>
                <Pressable onPress={() => navigation.navigate("DetalleResenia")}>
                    <View style={styles.containerTitulo}>
                        <StyledText>{titulo}</StyledText>
                        <StyledText size30 dark_green semi_bold>{puntajeTotal}</StyledText>
                    </View>
                    <StyledText size20 style={{marginBottom: 10}}>@{restaurante}</StyledText>
                    <StyledText size14 numberOfLines={5}>{cuerpo}</StyledText>
                </Pressable>
                <View style={styles.buttonsContainer}>
                    {!liked ? (
                        <View style={styles.button}>
                            <Pressable onPress={() => handleLike()}>
                                <AntDesign name="hearto" size={24} color={colors.green300}/>
                            </Pressable>
                            <StyledText size16 dark_green>1.2K</StyledText>
                        </View>
                    ) : (
                        <View style={styles.button}>
                            <Pressable onPress={() => handleLike()}>
                                <AntDesign name="heart" size={24} color={colors.green300}/>
                            </Pressable>
                            <StyledText size16 dark_green>1.2K</StyledText>
                        </View>
                    )}
                    <Pressable style={styles.button} onPress={() => navigation.navigate("DetalleResenia")}>
                        <FontAwesome5 name="comment" size={24} color={colors.green300}/>
                        <StyledText size16 dark_green>300</StyledText>
                    </Pressable>
                    {!saved ? (
                        <View style={styles.button}>
                            <Pressable onPress={() => handleSaved()}>
                                <FontAwesome name="bookmark-o" size={28} color={colors.green300}/>
                            </Pressable>
                            <StyledText size16 dark_green>284</StyledText>
                        </View>
                    ) : (
                        <View style={styles.button}>
                            <Pressable onPress={() => handleSaved()}>
                                <FontAwesome name="bookmark" size={28} color={colors.green300}/>
                            </Pressable>
                            <StyledText size16 dark_green>284</StyledText>
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        minHeight: 300,
        backgroundColor: colors.green100,
        elevation: 10,
        padding: 16,
        borderRadius: 15,
        marginBottom: 20,
    },
    profileIcon: {
        width: 40,
        height: 40,
    },
    userContainer: {
        flexDirection: "row",
        gap: 10
    },
    containerTitulo: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 20
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16
    },
    button: {
        flexDirection: "row",
        gap: 6
    }
})
