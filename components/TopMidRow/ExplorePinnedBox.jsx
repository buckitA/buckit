import {StyleSheet, View} from "react-native";
import React, {useState} from "react";
import ExplorePorthole from "./ExplorePorthole";

export default function ExplorePinnedBox() {
    const [pinnedExplore, setPinnedExplore] = useState([
        <ExplorePorthole collection={"National Parks"} />,
        <ExplorePorthole collection={"State Parks"} />,
        <ExplorePorthole collection={"Regional Parks"} />,
        <ExplorePorthole collection={"County Parks"} />,
        <ExplorePorthole collection={"Local Parks"} />
    ]);


    return(
        <View style={styles.pinnedBox}>
            {pinnedExplore}
        </View>
    );

}


const styles = StyleSheet.create({
    pinnedBox: {
        marginHorizontal: "auto",
        width: 400,
        flexDirection: "row",
        flexWrap: "wrap"
    },
});