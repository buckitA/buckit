import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {
  const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
  };

  return (
    <View style={styles.screen}>

      <View style={styles.topRow}>
        <Text style={styles.buttonText}>BuckIt</Text>
      </View>

      <View style={styles.topMidRow}>
      </View>
      
      <View style={styles.bottomMidRow}>
        <TouchableOpacity style={styles.roundButton} onPress={buttonClickedHandler}>
          <Text style={styles.buttonText}>Check In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomRow}>
      </View>

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
  topRow: {
    flex: 3,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topMidRow: {
    flex: 4,
  },
  bottomMidRow: {
    flex: 10,
  },
  bottomRow: {
    flex: 3,
  },
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
  }
});
