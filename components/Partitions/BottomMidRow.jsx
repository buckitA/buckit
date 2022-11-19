import {StyleSheet, View, Text} from "react-native";
import React from "react";
import CheckInButton from "../BottomMidRow/CheckInButton";
import ExploreBadgesRow from "../ExploreBadgesRow";

export default function BottomMidRow(props) {

    const page = props.page;

    const middleText = getBottomMiddleText(page);

    if(middleText != null) {
        return(
            middleText
        );
    }

    return(
        <View style={styles.bottomMidRow}>
            <ExploreBadgesRow/>
            <ExploreBadgesRow/>
            <ExploreBadgesRow/>
        </View>);
}

const styles = StyleSheet.create({
    bottomMidRow: {
        flex: 10,
        flexDirection: "row",
        alignItems: 'center',
    },
});

function getBottomMiddleText(page) {
    if(page === "Home") return (
        <View style={styles.bottomMidRow}>
            <CheckInButton checkinButtonName={"Check In"}/>
        </View>);
    else return null;
}