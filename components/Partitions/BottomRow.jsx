import {StyleSheet, View} from "react-native";
import NavigationButton from "../BottomRow/NavigationButton";
import {useState} from "react";

export default function BottomRow(props) {
    const [navButtons, setNavButtons] = useState(["null", "null", "null"]);

    const page = props.page;

    if (page === "Collection") {
        return(
            <View style={{ padding: 10, flex: 1 }}>
                <View style = {styles.bottomRow}>
                    <NavigationButton screenName={"Explore"}/>
                </View>
            </View>
        );
    }


    if (navButtons[0] === "null") {
        const otherPages = getOtherPages(page);
        console.log(otherPages);
        setNavButtons(otherPages);
    }

    return(
        <View style={{ padding: 10, flex: 1 }}>
            <View style = {styles.bottomRow}>
                <NavigationButton screenName={navButtons[0]}/>
                <NavigationButton screenName={navButtons[1]}/>
                <NavigationButton screenName={navButtons[2]}/>
            </View>
        </View>
    );
}

function getOtherPages(page) {
    const pages = new Set(["Home", "Explore", "Settings", "Profile"]);
    pages.delete(page)
    return Array.from(pages);
}

const styles = StyleSheet.create({
    bottomRow: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    bottomButtonText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});