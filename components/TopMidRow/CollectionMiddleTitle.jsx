import {StyleSheet, Text, View} from "react-native";

export default function CollectionMiddleTitle({collectionName}) {

    return(
        <View>
            <Text style={styles.titleText}>{collectionName}</Text>
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