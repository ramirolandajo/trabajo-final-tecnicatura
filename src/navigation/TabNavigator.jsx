import {StyleSheet, View} from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import SavedStack from "./SavedStack";
import GenerarReseniaStack from "./GenerarReseniaStack";
import NotificacionesStack from "./NotificacionesStack";
import {Feather, FontAwesome, FontAwesome6, MaterialIcons} from "@expo/vector-icons";
import {colors} from "../global/colors";
import PerfilStack from "./PerfilStack";

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
                                <Feather name="home" size={28} color={colors.green500}/>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name={"SavedTab"}
                component={SavedStack}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View>
                                <FontAwesome name="bookmark-o" size={28} color={colors.green500}/>
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
                            <View style={{
                                borderWidth: 2,
                                borderRadius: 10,
                                borderColor: colors.green500,
                                paddingVertical: 5,
                                paddingHorizontal: 8
                            }}>
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
                name={"PerfilStack"}
                component={PerfilStack}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View>
                                <Feather name="user" size={30} color={colors.green500}/>
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
