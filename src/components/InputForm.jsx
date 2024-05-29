import {StyleSheet, Text, TextInput, View} from 'react-native'
import React, {useState} from 'react'
import {colors} from "../global/colors";
import Card from "../styledComponents/Card";
import StyledText from "../styledComponents/StyledText";

export default function InputForm({label, error, onChange, isSecure}) {
    const [input, setInput] = useState("");

    const onChangeText = (text) => {
        setInput(text);
        onChange(text);
    };

    return (
        <View style={styles.inputContainer}>
            <StyledText size20 style={styles.label}>{label}</StyledText>
            <Card style={{marginVertical: 30}}>
                <TextInput
                    style={styles.input}
                    value={input}
                    onChangeText={onChangeText}
                    secureTextEntry={isSecure}

                />
            </Card>
            {error ? <Text>* {error}</Text> : null}
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        width: "100%"
    },
    label: {
        position: "absolute",
        zIndex: 100,
        backgroundColor: "#FAFAFA",
        top: 5,
        left: 20,
        padding: 10,
        fontFamily: "OpenSans",
        color: colors.green600
    },
    input: {
        padding: 5,
        fontSize: 20,
        color: colors.green600,
        fontFamily: "OpenSans"
    }
})
