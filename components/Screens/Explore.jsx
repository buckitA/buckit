import {StyleSheet, View} from "react-native";
import TopRow from "../Partitions/TopRow";
import TopMidRow from "../Partitions/TopMidRow";
import BottomMidRow from "../Partitions/BottomMidRow";
import BottomRow from "../Partitions/BottomRow";
import {useRoute} from "@react-navigation/native";

export default function ExploreScreen() {

    const route = useRoute();

    return (
        <View style={styles.screen}>
            <TopRow/>
            <TopMidRow/>
            <BottomMidRow/>
            <BottomRow page={route.name}/>
        </View>
    );
}

const styles = StyleSheet.create({
    topRow: {
      flex: 3,
      backgroundColor: 'gold',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: 50,
      fontWeight: 'bold',
    },
    screen: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });