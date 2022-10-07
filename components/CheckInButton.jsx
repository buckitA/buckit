import {
    Alert,
    Linking,
    PermissionsAndroid,
    Platform,
    StyleSheet,
    Text,
    ToastAndroid,
    TouchableOpacity,
} from "react-native";
import React, {useState} from "react";
import Geolocation from 'react-native-geolocation-service';

export default function CheckInButton() {
    const [location, setLocation] = useState(null);

    return(
        <TouchableOpacity style={styles.roundButton} onPress={getLocation}>
            <Text style={styles.buttonText}>Check In</Text>
        </TouchableOpacity>
    );
}

const hasPermissionIOS = async () => {
    const openSetting = () => {
        Linking.openSettings().catch(() => {
            Alert.alert('Unable to open settings');
        });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
        return true;
    }

    if (status === 'denied') {
        Alert.alert('Location permission denied');
    }

    if (status === 'disabled') {
        Alert.alert(
            // `Turn on Location Services to allow "${appConfig.displayName}" to determine your location.`,
            `Turn on Location Services to allow app to determine your location.`,
            '',
            [
                { text: 'Go to Settings', onPress: openSetting },
                { text: "Don't Use Location", onPress: () => {} },
            ],
        );
    }

    return false;
};


const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
        return await hasPermissionIOS();
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
        return true;
    }

    const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
        return true;
    }

    const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
        ToastAndroid.show(
            'Location permission denied by user.',
            ToastAndroid.LONG,
        );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        ToastAndroid.show(
            'Location permission revoked by user.',
            ToastAndroid.LONG,
        );
    }

    return false;
};

const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
        return;
    }
    Geolocation.getCurrentPosition(
        (position) => {
            setLocation(position);
            console.log(position);
        },
        (error) => {
            Alert.alert(`Code ${error.code}`, error.message);
            setLocation(null);
            console.log(error);
        },
    );
};

const styles = StyleSheet.create({
    roundButton: {
        width: 350,
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
        borderColor: 'black',
        borderWidth: 10,
        backgroundColor: 'gray',
    },
    buttonText: {
        fontSize: 50,
        fontWeight: 'bold',
    },
});