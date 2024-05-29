import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import PinStack from "./PinStack";
import GenerarReseniaStack from "./GenerarReseniaStack";
import NotificacionesStack from "./NotificacionesStack";
import AjustesScreen from "./AjustesStack";
import {AntDesign, Feather, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {colors} from "../global/colors";
import MainHeader from "../components/MainHeader";
import AjustesStack from "./AjustesStack";

export default function TabNavigator() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tab.Screen
                name={"HomeTab"}
                component={HomeStack}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View>
                                <Feather name="home" size={28} color={colors.green500} />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name={"PinTab"}
                component={PinStack}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View>
                                <MaterialCommunityIcons name="pin-outline" size={30} color={colors.green500} />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name={"GenerarReseniaTab"}
                component={GenerarReseniaStack}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View style={{borderWidth: 2, borderRadius: 10, borderColor: colors.green500, paddingVertical: 5, paddingHorizontal: 8}}>
                                <FontAwesome6 name="add" size={30} color={colors.green500}/>
                            </View>
                        )
                    },
                    tabBarStyle: {display: "none"}
                }}
            />
            <Tab.Screen
                name={"NotificacionesTab"}
                component={NotificacionesStack}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View>
                                <MaterialIcons name="notifications-none" size={30} color={colors.green500}/>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name={"AjustesTab"}
                component={AjustesStack}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View>
                                <Feather name="settings" size={28} color={colors.green500} />
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    tabBar: {
        height: 60,
        backgroundColor: colors.green200
    }
})
