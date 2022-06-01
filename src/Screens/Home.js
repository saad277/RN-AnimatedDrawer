import React from "react";
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";

const Home = (props) => {
    const { animatedStyle } = props;
    return (
        <Animated.View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                ...animatedStyle
            }}
        >
            <Text>Home Screen</Text>
        </Animated.View>
    );
};

export default Home;
