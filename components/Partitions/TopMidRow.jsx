import {StyleSheet, View} from "react-native";
import React from "react";
import ExploreMiddleText from "../ExploreMiddleText";

export default function TopMidRow(props) {

    const page = props.page;

    const exploreMiddleText = getMiddleTextForExplore(page);

    if(exploreMiddleText != null) {
        return(
            <View style={styles.topMidRow}>{exploreMiddleText}</View>
        );
    }

    return(
        <View style={styles.topMidRow}></View>
    );
}

const styles = StyleSheet.create({
    topMidRow: {
        flex: 4,
    },
});

function getMiddleTextForExplore(page) {
    if(page === "Explore") return (<ExploreMiddleText/>);
    else return null;
}