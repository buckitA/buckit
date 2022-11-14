import React from "react";
import {Image, StyleSheet, View} from "react-native";
import capture from '../images/Capture.png';

export default function ProfileHeader() {

    return(
        <View style={styles.imageBox}>
            {/* Note the border radius should be in align with the calculation below */}
            <Image source={capture} style={styles.imageProper}/>
        </View>
    );
}

const styles = StyleSheet.create({
    imageBox: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 75,
        borderColor: 'black',
        borderWidth: 10, // the radius for the inner circle should be 150/2 - 10 = 65
        backgroundColor: '#fff',
    },
    imageProper: {
        width:130,
        height:130,
        borderRadius: 65
    }
});