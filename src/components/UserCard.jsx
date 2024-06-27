import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import StyledText from "../styledComponents/StyledText";
import {colors} from "../global/colors";
import profile_icon from "../../assets/images/profile_icon_placeholder.png";
import {useGetProfileImageQuery} from "../services/userService";

export default function UserCard({user}) {
    const {data} = useGetProfileImageQuery(user.localId);
    const [profileImage, setProfileImage] = useState(null);

    useEffect(() => {
        if (data) {
            setProfileImage(data.image)
        }
    }, [data])

    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                {profileImage ? (
                    <Image source={{uri: profileImage}} style={styles.profileIcon}/>
                ) : (
                    <Image source={profile_icon} style={styles.profileIcon}/>
                )}
                <View>
                    <StyledText size16 bold>{user.nombreCompleto}</StyledText>
                    <StyledText size14>@{user.nombreUsuario}</StyledText>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: colors.green300,
        borderBottomColor: colors.green300,
        paddingVertical: 10
    },
    userContainer: {
        flexDirection: "row",
        gap: 10,
        backgroundColor: colors.green200,
        borderRadius: 10,
        padding: 10
    },
    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 4000
    },
})