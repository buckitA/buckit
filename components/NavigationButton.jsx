import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default function NavigationButton({navigation}) {
    return(
        <TouchableOpacity style = {styles.navButton} onPress={() => navigation.navigate("Explore")}>
                <Text style = {styles.navButtonLabel}>Profile</Text>
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
        // textAlign: "center",  <- Causing error right now not sure why
    },
    navButtonLabel: {
        fontSize: 12,
        fontWeight: "500",
        color: "black",
        textAlign: "center"
    }
});
