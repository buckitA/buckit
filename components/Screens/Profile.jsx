import {Text, View} from "react-native";
import ProfileHeader from "../ProfileHeader";

export default function ProfileScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile</Text>
            <ProfileHeader></ProfileHeader>
        </View>
    );
}