import {StyleSheet, Text, View} from "react-native";
import React from "react";
import CheckInButton from "../CheckInButton";

export default function BottomMidRow() {
    return(
        <View style={styles.bottomMidRow}>
            <CheckInButton checkinButtonName={"Check In"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomMidRow: {
        flex: 10,
    },
});