import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";

const Home = (props) => {
    const { animatedStyle, navigation } = props;
    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                ...animatedStyle,
                padding: 50
            }}
        >
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Text>Open Drawer</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default Home;
