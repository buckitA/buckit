import {StyleSheet, View} from "react-native";
import React from "react";
import ExploreMiddleText from "../ExploreMiddleText";

export default function TopMidRow(props) {

    const page = props.page;

    const middleText = getMiddleText(page);

    if(middleText != null) {
        return(
            <View style={styles.topMidRow}>{middleText}</View>
        );
    }

    return(
        <View style={styles.topMidRow}></View>
    );
}

const styles = StyleSheet.create({
    topMidRow: {
        flex: 2,
        alignItems: 'center',
    },
});

function getMiddleText(page) {
    if(page === "Explore") return (<ExploreMiddleText/>);
    else return null;
}