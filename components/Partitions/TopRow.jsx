import {StyleSheet, View, Text} from "react-native";
import HomeBuckitText from '../HomeBuckitText'
import React from "react";

export default function TopRow(props) {

  const topRowContent = getTopRowContent(props.page);

  if(props.page === "Home") {
    return(
    <View style={styles.topRowHome}>
      {topRowContent}
    </View>);
  }

  if(props.page === "Explore") {
    return(
    <View style={styles.topRowExplore}>
      {topRowContent}
    </View>);
  }

  return(
      <View>
        {topRowContent}
      </View>
  );
}

const styles = StyleSheet.create({
  topRowHome: {
    flex: 1,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topRowExplore: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

function getTopRowContent(page) {
  if(page === "Home") return ( <HomeBuckitText/>);
  if(page === "Explore") return (<Text>Placeholder For Explore TopRowContent</Text>);
  else return (<Text>For other pages</Text>);
}
