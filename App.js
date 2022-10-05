import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

const buttonClickedHandler = () => {
  console.log('You have been clicked a button!');
};

function HomeScreen({ navigation }) {
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
  bottomRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bottomButtonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "black",
    textAlign: "center"
  }
});
