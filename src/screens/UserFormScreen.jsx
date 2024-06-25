import {StyleSheet, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";
import StyledText from "../styledComponents/StyledText";
import InputForm from "../components/InputForm";
import StyledButton from "../styledComponents/StyledButton";
import {useDispatch} from "react-redux";
import {setUser} from "../features/auth/authSlice";
import {usePostUserMutation} from "../services/userService";
import ErrorMessage from "../components/ErrorMessage";

export default function UserFormScreen({navigation, route}) {
    const {email, idToken, localId} = {...route.params}

    const [nombreCompleto, setNombreCompleto] = useState("");
    const [nombreUsuario, setNombreUsuario] = useState("");
    const [triggerSaveUser, result] = usePostUserMutation();
    const [globalError, setGlobalError] = useState(false);

    const dispatch = useDispatch();

    function handleSubmit() {
        triggerSaveUser({email, localId, nombreCompleto, nombreUsuario})
    }

    useEffect(() => {
        if (result.error) {
            setGlobalError(true)
        }
        if (result.data) {
            dispatch(setUser({email, idToken, localId, nombreCompleto, nombreUsuario}));
        }
    }, [result]);

    return (
        <StyledScreenWrapper>
            {!globalError ? (
                <>
                    <View style={{flex: 1}}>
                        <View style={{alignItems: "center"}}>
                            <StyledText size28 bold style={{marginBottom: 20}}>Bienvenido a Dine&Discover!</StyledText>
                            <StyledText>Llena los siguientes datos asi te conocemos mejor :D</StyledText>
                        </View>
                        <InputForm
                            label={"Nombre completo"}
                            onChange={setNombreCompleto}
                        />
                        <InputForm
                            label={"Nombre de usuario"}
                            onChange={setNombreUsuario}
                        />
                    </View>
                    <StyledButton text={"Continuar a la aplicacion"} filled onPress={() => handleSubmit()}/>
                </>
            ) : (
                <>
                    <ErrorMessage
                        errorCode={result.error.data.error.code}
                        errorMessage={result.error.data.error.message}
                    />
                    <StyledButton text={"Go Back"} onPress={() => setGlobalError(false)} filled/>
                </>
            )}

        </StyledScreenWrapper>
    )
}
const styles = StyleSheet.create({})
