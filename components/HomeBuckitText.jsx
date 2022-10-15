import React from "react";
import {Text, StyleSheet} from "react-native";

export default function HomeBuckitText() {

    return(
        <Text style={styles.buttonText}>BuckIt</Text>
    );
}

const styles = StyleSheet.create({
    buttonText: {
      fontSize: 50,
      fontWeight: 'bold',
    }
  });