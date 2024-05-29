import {StyleSheet, Text, TextInput, View} from 'react-native'
import React, {useState} from 'react'
import {colors} from "../global/colors";

export default function InputForm({label, error, onChange, isSecure}) {
    const [input, setInput] = useState("");

    const onChangeText = (text) => {
        setInput(text);
        onChange(text);
    };

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={{marginVertical: 30}}>
                <TextInput
                    style={styles.input}
                    value={input}
                    onChangeText={onChangeText}
                    secureTextEntry={isSecure}

                />
            </View>
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
        backgroundColor: "white",
        top: 10,
        left: 15,
        padding: 10
    },
    input: {
        padding: 5,
        fontSize: 20,
        color: colors.green600,
    }
})
