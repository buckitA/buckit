import {StyleSheet, View} from "react-native";
import React from "react";
import ExploreMiddleText from "../ExploreMiddleText";
import ProfileHeader from "../TopMidRow/ProfileHeader";
import TitleBanner from "../TopRow/TitleBanner";

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
    if(page === "Home") return ( <TitleBanner/>);
    if(page === "Explore") return (<ExploreMiddleText/>);
    if(page === "Profile") return (<ProfileHeader/>);
    else return null;
}