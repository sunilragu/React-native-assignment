import React, { Component } from "react";
import { View, Text, Button, Alert } from "react-native";

class Home extends Component {
  render() {
    return (
      <View
        style={{
          
          height: 100,
          padding: 20,
          backgroundColor:"blue",
          alignItems:"center"
        }}
      >
        <Button
        title="Press me"
        onPress={() => Alert.alert('Do you want to move?')}
      />
      </View>
    );

    
  }
}

export default Home;