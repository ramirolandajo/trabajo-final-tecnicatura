import {Image, Pressable, StyleSheet, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";
import profile_icon from "../../assets/images/profile_icon_placeholder.png"
import StyledText from "../styledComponents/StyledText";
import {useDispatch, useSelector} from "react-redux";
import {colors} from "../global/colors";

export default function PerfilScreen({navigation}) {
    const {profileImage, imageCamera, nombreCompleto, nombreUsuario, localId} = useSelector((state) => state.authReducer.value);
    const [currentImage, setCurrentImage] = useState(null);

    const dispatch = useDispatch();

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
        gap: 20,
        alignItems: "center",
        marginBottom: 30
    }
})
