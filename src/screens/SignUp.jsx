import {Image, Pressable, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {useSignUpMutation} from "../services/authService";
import {signupSchema} from "../validations/signupSchema";
import InputForm from "../components/InputForm";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import StyledButton from "../styledComponents/StyledButton";
import StyledText from "../styledComponents/StyledText";
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";
import logo from "../../assets/images/greenLogo.png";

export default function SignUp({navigation}) {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [globalError, setGlobalError] = useState(false);
    const [triggerSignup, result] = useSignUpMutation();

    const dispatch = useDispatch();

    const onSubmit = () => {
        try {
            setErrorMail("");
            setErrorPassword("");
            setErrorConfirmPassword("");

            signupSchema.validateSync({password, confirmPassword, email});
            triggerSignup({email, password});

        } catch (err) {
            switch (err.path) {
                case "email":
                    setErrorMail(err.message);
                    break;
                case "password":
                    setErrorPassword(err.message);
                    break;
                case "confirmPassword":
                    setErrorConfirmPassword(err.message);
                    break;
                default:
                    break;
            }
        }
    };

    useEffect(() => {
        if (result.data) {
            console.log(result.data)
            navigation.navigate("UserForm", {email: result.data.email, idToken: result.data.idToken, localId: result.data.localId});
        }
    }, [result]);

    return (
        <StyledScreenWrapper>
            {!globalError ?
                (!result.isLoading ? (
                    <>
                        <View style={{flex: 1}}>
                            <View style={{alignItems: "center"}}>
                                <Image source={logo} style={{width: 80, height: 80, marginBottom: 10}}/>
                                <StyledText size30>Sign Up</StyledText>
                            </View>
                            <InputForm label={"Email"} error={errorMail} onChange={setEmail}/>
                            <InputForm
                                label={"Password"}
                                error={errorPassword}
                                onChange={setPassword}
                                isSecure={true}
                            />
                            <InputForm
                                label={"Confirm password"}
                                error={errorConfirmPassword}
                                onChange={setConfirmPassword}
                                isSecure={true}
                            />
                            <Pressable onPress={() => navigation.navigate("Login")}
                                       style={{marginTop: 10, marginBottom: 20}}>
                                <StyledText size20 style={{textAlign: "right"}}>Ya tenes una cuenta?</StyledText>
                                <StyledText size20 light_blue style={{textAlign: "right"}}>Inicia Sesion</StyledText>
                            </Pressable>
                        </View>
                        <StyledButton text={"Registrarse"} onPress={onSubmit} filled/>
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
    )
}
