import React from "react";
import {Image, StyleSheet, View} from "react-native";
import capture from '../images/Capture1.png';

export default function ExploreBadgesRow() {

    // Wonder if there is a way to lay out and shape badges based on its number
    // No idea yet...

    return(
        <View style={styles.badgesRow}>
            <View style={styles.imageBox}>
                <Image source={capture} style={{width:76, height:76, borderRadius: 38}}/>
            </View>
            <View style={styles.imageBox}>
                <Image source={capture} style={{width:76, height:76, borderRadius: 38}}/>
            </View>
            <View style={styles.imageBox}>
                <Image source={capture} style={{width:76, height:76, borderRadius: 38}}/>
            </View>
            <View style={styles.imageBox}>
                <Image source={capture} style={{width:76, height:76, borderRadius: 38}}/>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    imageBox: {
        marginHorizontal: "5%",
        marginBottom: 8,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        borderColor: 'black',
        borderWidth: 2, 
        backgroundColor: '#fff',
    },
    badgesRow: {
        alignItems: 'center',
    },
});