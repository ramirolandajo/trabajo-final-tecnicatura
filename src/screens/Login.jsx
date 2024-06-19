import {Image, Pressable, View} from "react-native";
import React, {useEffect, useState} from "react";
import {useLoginMutation} from "../services/authService";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../features/auth/authSlice";
import {loginSchema} from "../validations/loginSchema";

import InputForm from "../components/InputForm";
import Loader from "../components/Loader";
import {insertSession} from "../db";
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";
import StyledText from "../styledComponents/StyledText";
import StyledButton from "../styledComponents/StyledButton";
import ErrorMessage from "../components/ErrorMessage";
import logo from "../../assets/images/greenLogo.png";
import {useGetUserDataQuery} from "../services/userService";

export default function Login({navigation}) {
    const {localId} = useSelector((state) => state.authReducer.value)
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [globalError, setGlobalError] = useState(false);
    const [triggerLogin, result] = useLoginMutation();

    const dispatch = useDispatch();

    useEffect(() => {
        if (result.error) {
            setGlobalError(true)
        }
        if (result.data) {
            const {email, idToken, localId} = {...result.data};
            dispatch(setUser({email, idToken, localId}));
        }
    }, [result]);

    const onSubmit = () => {
        try {
            loginSchema.validateSync({password, email});
            triggerLogin({email, password});

        } catch (err) {
            switch (err.path) {
                case "email":
                    setErrorMail(err.message);
                    break;
                case "password":
                    setErrorPassword(err.message);
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <StyledScreenWrapper>
            {!globalError ?
                (!result.isLoading ? (
                    <>
                        <View style={{flex: 1}}>
                            <View style={{alignItems: "center"}}>
                                <Image source={logo} style={{width: 80, height: 80, marginBottom: 10}}/>
                                <StyledText size36 dark_green>Login</StyledText>
                            </View>
                            <InputForm label={"Email"} error={errorMail} onChange={setEmail}/>
                            <InputForm
                                label={"Password"}
                                error={errorPassword}
                                onChange={setPassword}
                                isSecure={true}
                            />
                            <Pressable onPress={() => navigation.navigate("SignUp")}
                                       style={{marginTop: 10, marginBottom: 20}}
                            >
                                <StyledText size20 style={{textAlign: "right"}}>
                                    No tenes una cuenta?
                                </StyledText>
                                <StyledText size20 dark_green style={{textAlign: "right"}}>
                                    Registrate!
                                </StyledText>
                            </Pressable>
                        </View>
                        <StyledButton text={"Login"} onPress={onSubmit} filled/>
                    </>
                ) : (
                    <Loader/>
                )) : (
                    <>
                        <ErrorMessage
                            errorCode={result.error.data.error.code}
                            errorMessage={result.error.data.error.message}
                        />
                        <StyledButton text={"Go Back"} onPress={() => setGlobalError(false)} filled/>
                    </>
                )}
        </StyledScreenWrapper>
    );
};