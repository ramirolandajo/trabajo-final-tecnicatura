import MainNavigator from "./src/navigation/MainNavigator";
import {Provider} from "react-redux";
import store from "./src/store/index"
import {useFonts} from "expo-font";
import {fonts} from "./src/global/fonts"
import {dropTable, init} from "./src/db";

init()
    .catch((err) => {
        console.log(err);
    })

export default function App() {
    const [fontsLoaded, fontError] = useFonts(fonts);
    if (!fontsLoaded && !fontError) {
        return null
    }

    return (
        <Provider store={store}>
            <MainNavigator/>
        </Provider>
    );
}