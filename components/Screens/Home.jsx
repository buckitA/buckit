import {StyleSheet, View} from "react-native";
import TopRow from "../Partitions/TopRow";
import TopMidRow from "../Partitions/TopMidRow";
import BottomMidRow from "../Partitions/BottomMidRow";
import BottomRow from "../Partitions/BottomRow";
import {useRoute} from "@react-navigation/native";

export default function HomeScreen() {

    const route = useRoute();

    return (
        // The layout for the screen is 1:2:10:1, as set in flex attributes in Partitions
        // https://reactnative.dev/docs/height-and-width
        // Currently the bottom row position is slightly different than the other two pages
        // because on top of this flexible dimension layout, we have fixed layout for the
        // checkin button, we might need to keep the component or container in BottomMidRow
        // with the same fixed height and weight with the checkin button's setting
        <View style={styles.screen}>
            <TopRow page={route.name}/>
            <TopMidRow page={route.name}/>
            <BottomMidRow page={route.name}/>
            <BottomRow page={route.name}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 10,
    },
});