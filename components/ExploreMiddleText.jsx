import {StyleSheet, Text, View} from "react-native";

export default function ExploreMiddleText() {

    return(
        <View style={styles.titleText}>
            <Text>National Parks</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 50,
        fontWeight: 'bold',
      }
});