import React from "react";
import {StyleSheet, Text, View} from "react-native";
import ProfilePicture from "./ProfilePicture";
import ProfileSummary from "./ProfileSummary";

export default function ProfileHeader() {

    return(
        <View style={styles.profileContainer}>
            <ProfilePicture/>
            <ProfileSummary/>
        </View>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});