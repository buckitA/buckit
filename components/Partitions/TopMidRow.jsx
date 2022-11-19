import {StyleSheet, View} from "react-native";
import React from "react";
import CollectionMiddleTitle from "../TopMidRow/CollectionMiddleTitle";
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
    if(page === "Collection") return (<CollectionMiddleTitle collectionName={"National Parks"} />);
    if(page === "Explore") return (<PinnedExploreBox/>);
    if(page === "Profile") return (<ProfileHeader/>);
    else return null;
}