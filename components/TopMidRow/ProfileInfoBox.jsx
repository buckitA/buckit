import {StyleSheet, View} from "react-native";
import React from "react";

export default function ProfileInfoBox(props) {

    return(
        <View style={styles.infoBox}>
            {/* {props.payload} */}
            {/* Temporarily disabled payload injection */}
        </View>
    );
}

const styles = StyleSheet.create({
    infoBox: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        backgroundColor: '#fff',
    }
});