import React from "react";
import {StyleSheet, View} from "react-native";
import ProfileInfoBox from "./ProfileInfoBox";

export default function ProfileSummary() {

    return(
        <View style={styles.summaryContainer}>
            <ProfileInfoBox payload={"Joe Gramstad"}/>
            <ProfileInfoBox payload={"Arlington, VA"}/>
            <ProfileInfoBox payload={"Score: 700"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    summaryContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 10, // the radius for the inner circle should be 150/2 - 10 = 65
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        backgroundColor: '#fff',
    }
});