import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TopRow from "./components/Partitions/TopRow";
import BottomMidRow from "./components/Partitions/BottomMidRow";
import TopMidRow from "./components/Partitions/TopMidRow";

export default function App() {
  return (<NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" 
      component={HomeScreen} 
      />
      <Stack.Screen name="Explore" component={ExploreScreen} />
    </Stack.Navigator>
  </NavigationContainer>);
}

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>

      <TopRow/>

      <TopMidRow>
        {/* Need default content here */}
      </TopMidRow>
      
      <BottomMidRow/>

      <View style={{ padding: 10, flex: 1 }}>
        <View style = {styles.bottomRow}>
          <TouchableOpacity 
          style = {styles.bottomButton}
          onPress={() => navigation.navigate("Explore")}>
            <Text style = {styles.bottomButtonLabel}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.bottomButton}
          onPress={() => navigation.navigate("Explore")}> 
          {/* Navigate page should be updated later */}
            <Text style = {styles.bottomButtonLabel}>Explore</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


function ExploreScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Explore Screen</Text>
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
  bottomRow: {
    flex: 3,
  },
  bottomButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  bottomButton: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: "gray",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  bottomButtonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "black",
    textAlign: "center"
  }
});
