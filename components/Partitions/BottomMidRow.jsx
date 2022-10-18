import {StyleSheet, View, Text} from "react-native";
import React from "react";
import CheckInButton from "../CheckInButton";

export default function BottomMidRow(props) {

    const page = props.page;

    const middleText = getBottomMiddleText(page);

    if(page === "Home") {
        return(
            <View style={styles.bottomMidRow}>
                <CheckInButton checkinButtonName={"Check In"}/>
            </View>
        );
    }

    return(
        <View style={styles.bottomMidRow}>
            <Text>PlaceHolder for other pages</Text>
        </View>);
}

const styles = StyleSheet.create({
    bottomMidRow: {
        flex: 10,
    },
});

function getBottomMiddleText(page) {
    if(page === "Explore") return (<CheckInButton checkinButtonName={"Check In"}/>);
    else return null;
}