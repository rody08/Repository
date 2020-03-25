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
          Welcome to our probability simulator{"\n"}
          {"\n"}The purpose of this app is to help 
          {"\n"}students visualize how probability 
          {"\n"}works in different scenarios. 
          {"\n"}
          {"\n"}
          {"\n"}Software Developers:
          {"\n"}Bhusan Paudel
          {"\n"}Elwin Jaramillo
          {"\n"}Rodolfo Soto 

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
    backgroundColor: "rgba(190,207,223,1)"
  },

  introSButton: {
    top: 0,
    left: 0,
    width: 209,
    height: 52,
    backgroundColor: "rgba(255,87,0,1)",
    position: "absolute",
    borderRadius: 100,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.45
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
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.45
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
    backgroundColor: "rgba(255,87,0,1)",
    position: "absolute",
    borderRadius: 100,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.45
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
    backgroundColor: "rgba(239,221,205,1)",
    borderRadius: 33,
    borderColor: "rgba(255,87,0,1)",
    borderWidth: 4,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.45,
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
    textAlign: "left",
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
