import React from "react";
import {Text, StyleSheet} from "react-native";

export default function TitleBanner() {

    return(
        <Text style={styles.titleText}>BuckIt</Text>
    );
}

const styles = StyleSheet.create({
    titleText: {
      fontSize: 50,
      fontWeight: 'bold',
    }
  });