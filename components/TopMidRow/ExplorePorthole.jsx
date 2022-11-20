import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";

export default function ExplorePorthole({collection}) {
    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.porthole} onPress={() => navigation.navigate("Collection")}>
            <Text style={styles.buttonText}>{collection}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    porthole: {
        flex: 1,
        minWidth: 100,
        maxWidth: 100,
        height: 100,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",

        // my visual styles; not important for grid
        padding: 10,
        backgroundColor: "rgba(249, 180, 45, 0.25)",
        borderWidth: 1.5,
        borderColor: "#fff"
    },
    buttonText: {
        fontSize: 10,
        fontWeight: 'bold',
    },
});