import {StyleSheet, Text, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function NavigationButton({buttonName}) {
    // To call useNavigation() directly to enable stack navigation for NavigationButton
    // source: https://reactnavigation.org/docs/connecting-navigation-prop/
    const navigation = useNavigation();
    
    return(
        // To use button to navigate, make sure the destination screen is named the same as the buttonName
        <TouchableOpacity style = {styles.navButton} onPress={() => navigation.navigate(buttonName)}>
                <Text style = {styles.navButtonLabel}>{buttonName}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    navButton: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 4,
        backgroundColor: "gray",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center"
    },
    navButtonLabel: {
        fontSize: 12,
        fontWeight: "500",
        color: "black",
        textAlign: "center"
    }
});
