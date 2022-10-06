import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function TopRow() {
  return(
      <View style={styles.topRow}>
        <Text style={styles.buttonText}>BuckIt</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  topRow: {
    flex: 3,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 50,
    fontWeight: 'bold',
  }
});
