import React, {useState} from "react";
import {Image, StyleSheet, View} from "react-native";

export default function ProfileHeader() {

    return(
        <View style={styles.imageBox}>
            <Image source={images/Capture.PNG}/>
        </View>
    );
}

const styles = StyleSheet.create({
    imageBox: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
        borderColor: 'black',
        borderWidth: 10,
        backgroundColor: 'gray',
    },
});