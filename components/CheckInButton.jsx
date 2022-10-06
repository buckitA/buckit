import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

export default function CheckInButton() {
    return(
        <TouchableOpacity style={styles.roundButton} onPress={buttonClickedHandler}>
            <Text style={styles.buttonText}>Check In</Text>
        </TouchableOpacity>
    );
}
const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
};

const styles = StyleSheet.create({
    roundButton: {
        width: 350,
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
        borderColor: 'black',
        borderWidth: 10,
        backgroundColor: 'gray',
    },
    buttonText: {
        fontSize: 50,
        fontWeight: 'bold',
    },
});