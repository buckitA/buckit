import {StyleSheet, Text, View} from "react-native";
import ProfileHeader from "../ProfileHeader";

export default function ProfileScreen() {
    return (
        <View style={styles.profileContainer}>
            <Text>Profile</Text>
            <ProfileHeader></ProfileHeader>
        </View>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});