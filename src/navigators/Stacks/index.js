import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Drawer from "../Drawer/DrawerMenu";

const Stack = createStackNavigator();

const Stacks = () => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={Drawer}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
);

export default Stacks;
