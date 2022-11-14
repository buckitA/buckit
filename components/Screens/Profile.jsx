import {StyleSheet, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import TopRow from "../Partitions/TopRow";
import TopMidRow from "../Partitions/TopMidRow";
import BottomMidRow from "../Partitions/BottomMidRow";
import BottomRow from "../Partitions/BottomRow";

export default function ProfileScreen() {

    const route = useRoute();

    return (
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
        padding: 10,
    },
});