import {StyleSheet, View} from "react-native";
import TitleBanner from '../TopRow/TitleBanner'
import React from "react";

export default function TopRow() {
  return(
    <View style={styles.banner}>
      <TitleBanner/>
    </View>);
}

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

