import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";

function IntroScreen(props) {
  return (
    <View style={styles.container}>

      <View style={styles.introSButtonStack}>
        <CupertinoButtonDanger
          text1="Spinner"
          button1="Spinner"
          style={styles.introSButton}
        ></CupertinoButtonDanger>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Spinner")}
          style={styles.isBonClick}
        ></TouchableOpacity>
      </View>

      <View style={styles.ictButtonStack}>
        <CupertinoButtonDanger
          text1="Coin Toss"
          button1="CoinToss"
          style={styles.ictButton}
        ></CupertinoButtonDanger>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("CoinToss")}
          style={styles.ictBonClick}
        ></TouchableOpacity>
      </View>

      <View style={styles.rect1}>

        <Text style={styles.probabilitySimulator}>
          Probability Simulator
        </Text>

        <Text style={styles.nlvm}>
          National Library of Virtual Manipulatives
        </Text>

        <Text style={styles.loremIpsum}>
          Welcome to our simulator.
          {"\n"}
          {"\n"}Here we will help you understand
          {"\n"}probabilities. 
          {"\n"}
          {"\n"}Probability is the extent to which an event is likely to occur.
          {"\n"}
          {"\n"}Let's go see how it works!
          {"\n"}

        </Text>

        <Text style={styles.chooseGame}>
          Choose a game to begin:
          </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "rgba(143, 216, 255,1)"
  },

  introSButton: {
    top: 0,
    left: 0,
    width: 209,
    height: 52,
    backgroundColor: "rgba(57, 227, 48,1)",
    position: "absolute",
    borderRadius: 100,
    
  },

  isBonClick: {
    top: 0,
    left: 3,
    width: 209,
    height: 52,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0,
    shadowOffset: {
      height: 20,
      width: 20
    },
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 1
  },

  introSButtonStack: {
    width: 212,
    height: 52,
    marginTop: 568,
    marginLeft: 90
  },

  ictButton: {
    top: 0,
    left: 0,
    width: 209,
    height: 52,
    backgroundColor: "rgba(57, 227, 48,1)",
    position: "absolute",
    borderRadius: 100,
    
  },

  ictBonClick: {
    top: 0,
    left: 3,
    width: 209,
    height: 52,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0,
    borderColor: "#000000",
    borderWidth: 0
  },

  ictButtonStack: {
    width: 212,
    height: 52,
    marginTop: -142,
    marginLeft: 90
  },

  rect1: {
    width: 315,
    height: 370,
    backgroundColor: 'white',
    borderRadius: 33,
    borderColor: "rgba(255, 151, 0,1)",
    borderWidth: 4,
    shadowOffset: {
      height: 20,
      width: 20
    },
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 1,
    marginTop: -496,
    marginLeft: 40
  },

  probabilitySimulator: {
    color: "rgba(66,66,66,1)",
    fontSize: 30,
    fontFamily: "roboto-regular",
    marginTop: 30,
    marginLeft: 14
  },

  nlvm: {
    color: "rgba(66,66,66,1)",
    fontSize: 12,
    fontFamily: "roboto-regular",
    marginTop: 12,
    marginLeft: 45
  },

  loremIpsum: {
    width: 263,
    height: 200,
    color: "rgba(66,66,66,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "center",
    marginTop: 18,
    marginLeft: 20
  },

  chooseGame: {
    color: "rgba(66,66,66,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 70,
    marginLeft: 50
  }
});

export default IntroScreen;
