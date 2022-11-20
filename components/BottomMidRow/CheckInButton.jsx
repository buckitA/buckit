import {StyleSheet, Text, TouchableOpacity,} from "react-native";
import React, {useState} from "react";

export default function CheckInButton({checkinButtonName}) {
    // Hook should be at a top-level in a function component
    // https://reactjs.org/warnings/invalid-hook-call-warning.html
    const [location, setLocation] = useState([0.000, 0.000]);

    const getLocation = () => {
        const location = [getRandomInRange(-180, 180, 3), getRandomInRange(-90, 90, 3)];
        console.log(location);
        setLocation(location);
    };

    return(
        <TouchableOpacity style={styles.roundButton} onPress={getLocation}>
            <Text style={styles.buttonText}>{checkinButtonName}</Text>
        </TouchableOpacity>
    );
}

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

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