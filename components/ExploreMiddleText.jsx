import {StyleSheet, Text, View} from "react-native";

export default function ExploreMiddleText() {

    return(
        <View>
            <Text style={styles.titleText}>National Parks</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        alignItems: 'center',
      }
});