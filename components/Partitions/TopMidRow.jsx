import {StyleSheet, View} from "react-native";
import React from "react";
import CollectionMiddleTitle from "../TopMidRow/CollectionMiddleTitle";
import ProfileHeader from "../TopMidRow/ProfileHeader";
import TitleBanner from "../TopRow/TitleBanner";
import ExplorePinnedBox from "../TopMidRow/ExplorePinnedBox";

export default function TopMidRow(props) {

    const page = props.page;

    const middleComponent = getMiddleComponent(page);

    if(middleComponent != null) {
        return(
            <View style={styles.topMidRow}>{middleComponent}</View>
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

function getMiddleComponent(page) {
    if(page === "Home") return (<TitleBanner/>);
    if(page === "Collection") return (<CollectionMiddleTitle collectionName={"National Parks"}/>);
    if(page === "Explore") return (<ExplorePinnedBox/>);
    if(page === "Profile") return (<ProfileHeader/>);
    else return null;
}