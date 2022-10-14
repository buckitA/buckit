import {StyleSheet, View} from "react-native";
import TopRow from "../Partitions/TopRow";
import TopMidRow from "../Partitions/TopMidRow";
import BottomMidRow from "../Partitions/BottomMidRow";
import BottomRow from "../Partitions/BottomRow";

export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <TopRow/>
            <TopMidRow/>
            <BottomMidRow/>
            <BottomRow/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});