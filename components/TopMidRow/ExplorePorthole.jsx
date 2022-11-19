import {StyleSheet, View} from "react-native";
import React from "react";

export default function ExplorePorthole({collection}) {
    return(
        <View style={styles.porthole}>
            {collection}
        </View>
    );


}

const styles = StyleSheet.create({
    porthole: {
        flex: 1,
        minWidth: 100,
        maxWidth: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",

        // my visual styles; not important for grid
        padding: 10,
        backgroundColor: "rgba(249, 180, 45, 0.25)",
        borderWidth: 1.5,
        borderColor: "#fff"
    },
});