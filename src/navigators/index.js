import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Drawer from "../navigators/Stacks";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer />
        </NavigationContainer>
    );
};

export default AppNavigator;
