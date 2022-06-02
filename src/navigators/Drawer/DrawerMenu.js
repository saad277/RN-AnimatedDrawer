import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Animated, { interpolateNode, interpolate } from "react-native-reanimated";

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import Home from "../../Screens/Home";

const Menus = [
    { name: "Home", label: "Home" },
    { name: "Profile", label: "Profile" },
    { name: "Accounts", label: "Accounts" },
    { name: "Transactions", label: "Transactions" },
    { name: "Stats", label: "Stats" },
    { name: "Settings", label: "Settings" },
    { name: "Help", label: "Help" }
];

const MOCK =
    "https://images.unsplash.com/photo-1638913971873-bcef634bdcd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

const CustomDrawerContent = () => {
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    width: 160,
                    height: 107,
                    borderBottomEndRadius: 107 / 2,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#8ed1fc"
                }}
            >
                <View>
                    <Image source={{ uri: MOCK }} style={{ width: 30, height: 20 }} />
                </View>
                <Text>Carol Black</Text>
                <Text>Seattle , Washington</Text>
            </View>

            <DrawerContentScrollView scrollEnabled={false} contentContainerStyle={{}} style={{}}>
                {Menus.map((item, index) => {
                    return (
                        <DrawerItem
                            key={index}
                            label={() => {
                                return (
                                    <View>
                                        <Text>{item.label}</Text>
                                    </View>
                                );
                            }}
                        ></DrawerItem>
                    );
                })}
            </DrawerContentScrollView>
        </View>
    );
};

const DrawerMenu = () => {
    const [progress, setProgress] = useState(new Animated.Value(0));

    const scale = interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.75]
    });

    const rotate = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: ["0deg", "10deg"]
    });

    const animatedStyle = {
        transform: [{ scale, rotate }]
    };

    return (
        <View style={{ flex: 1 }}>
            <Drawer.Navigator
                hideStatusBar={true}
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={{
                    flex: 1,
                    width: "50%",
                    backgroundColor: "transparent"
                }}
                sceneContainerStyle={{
                    backgroundColor: "transparent"
                }}
                initialRouteName="Home"
                drawerContent={(props) => {
                    setTimeout(() => {
                        setProgress(props.progress);
                    }, 0);

                    return <CustomDrawerContent navigation={props.navigation} />;
                }}
            >
                <Drawer.Screen name="Home">
                    {(props) => <Home {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    );
};

export default DrawerMenu;
