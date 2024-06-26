import {Image, Pressable, StyleSheet, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";
import profile_icon from "../../assets/images/profile_icon_placeholder.png"
import StyledText from "../styledComponents/StyledText";
import {useSelector} from "react-redux";
import {colors} from "../global/colors";

export default function PerfilScreen({navigation}) {
    const {profileImage, imageCamera, nombreCompleto, nombreUsuario} = useSelector((state) => state.authReducer.value);
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        setCurrentImage(imageCamera ? imageCamera : profileImage)
    }, [profileImage, imageCamera])


    return (
        <StyledScreenWrapper>
            <View style={styles.user_container}>
                {profileImage || imageCamera ? (
                    <Image
                        source={{uri: currentImage}}
                        style={styles.custom_image}
                    />
                ) : (
                    <Image source={profile_icon} style={styles.profile_icon}/>
                )}
                <View style={{gap: 5}}>
                    <StyledText bold>{nombreCompleto}</StyledText>
                    <StyledText size20>{nombreUsuario}</StyledText>
                </View>
            </View>
            <Pressable style={styles.button} onPress={() => navigation.navigate("EditarPerfil")}>
                <StyledText size20 style={{textAlign: "center"}}>Editar Perfil</StyledText>
            </Pressable>
            <View style={{gap: 20, flexDirection: "row", justifyContent: "space-between", backgroundColor: colors.green200, padding: 20, borderRadius: 10, marginTop: 20}}>
                <View style={{alignItems: "center"}}>
                    <StyledText bold>Seguidores</StyledText>
                    <StyledText>1024</StyledText>
                </View>
                <View style={{alignItems: "center"}}>
                    <StyledText bold>Seguidos</StyledText>
                    <StyledText>514</StyledText>
                </View>
            </View>
            <View style={{gap: 20, backgroundColor: colors.green200, padding: 20, borderRadius: 10, marginTop: 20}}>
                <StyledText>Resenias escritas: 23</StyledText>
                <StyledText>Likes dados: 1234</StyledText>
                <StyledText>Likes recibidos: 4292</StyledText>
                <StyledText>Comentarios escritos: 123</StyledText>
                <StyledText>Comentarios recibidos: 331</StyledText>
            </View>
        </StyledScreenWrapper>
    )
}
const styles = StyleSheet.create({
    profile_icon: {
        width: 80,
        height: 80,
    },
    custom_image: {
        width: 100,
        height: 100,
        borderRadius: 1000
    },
    button: {
        borderRadius: 500,
        backgroundColor: colors.green500,
        padding: 5,
        width: 150,
    },
    user_container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
        gap: 20
    }
})
