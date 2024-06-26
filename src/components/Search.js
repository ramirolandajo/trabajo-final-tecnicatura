import {useState} from "react";
import {Pressable, StyleSheet, TextInput, View} from "react-native";
import {colors} from "../global/colors";
import {AntDesign} from "@expo/vector-icons";

const Search = ({onSearch}) => {
    const [input, setInput] = useState("");

    function handleSearch() {
        onSearch(input)
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={setInput}
                placeholder="Search..."
                placeholderTextColor={colors.green200}
            />
            <Pressable onPress={handleSearch}>
                <AntDesign name="search1" size={30} color={colors.green300}/>
            </Pressable>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
    },
    input: {
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        width: "80%",
        fontSize: 20,
        marginRight: 10,
    },
});
