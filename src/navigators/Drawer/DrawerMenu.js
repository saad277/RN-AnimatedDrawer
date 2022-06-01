import React from "react";
import { View, Text, Image } from "react-native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import Home from "../../Screens/Home";

const Menus = [{ name: "Home", label: "Home" }];

const MOCK =
    "https://images.unsplash.com/photo-1638913971873-bcef634bdcd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

const CustomDrawerContent = () => {
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    width: 210,
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
        </View>
    );
};

const DrawerMenu = () => {
    return (
        <View style={{ flex: 1 }}>
            <Drawer.Navigator
                hideStatusBar={true}
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={{
                    flex: 1,
                    width: "60%",
                    backgroundColor: "transparent"
                }}
                sceneContainerStyle={{
                    backgroundColor: "transparent"
                }}
                initialRouteName="Home"
                drawerContent={(props) => {
                    return <CustomDrawerContent navigation={props.navigation} />;
                }}
            >
                <Drawer.Screen name="Home">{(props) => <Home {...props} />}</Drawer.Screen>
            </Drawer.Navigator>
        </View>
    );
};

export default DrawerMenu;
