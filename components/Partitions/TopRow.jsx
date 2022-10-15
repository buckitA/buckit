import {StyleSheet, Text, View} from "react-native";
import HomeBuckitText from '../HomeBuckitText'
import React from "react";

export default function TopRow() {
  return(
      <View style={styles.topRow}>
        <HomeBuckitText/>
      </View>
  );
}

const styles = StyleSheet.create({
  topRow: {
    flex: 3,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
