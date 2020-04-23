import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

function IntroScreen(props) {
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => props.navigation.navigate("CoinToss")}>
      <Image
      source={require("../assets/images/CoinToss.png")}
      resizeMode="contain" style = {styles.coin}
      >
      </Image>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("Spinner")}>
      <Image
      source={require("../assets/images/Spinner.png")}
      resizeMode="contain" style = {styles.spinnner}
      >
      </Image>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "rgba(143, 216, 255,1)"
  },

  coin: 
  {
      alignSelf : "center",
      marginTop: 70
  }, 
  
  spinnner:
  {
      alignSelf : "center",
      
  }

});

export default IntroScreen;
