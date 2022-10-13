import {StyleSheet, View} from "react-native";
import NavigationButton from "../NavigationButton";

export default function BottomRow() {
    return(
        <View style = {styles.bottomRow}>
            <NavigationButton/>
            <NavigationButton/>
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
    bottomRow: {
        flex: 3,
    },
    bottomButtonText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});