import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";
import CupertinoHeaderWithActionButton from "../components/CupertinoHeaderWithActionButton";

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
      <CupertinoHeaderWithActionButton
        text2="Welcome!"
        text3=""
        style={styles.introHeader}
      ></CupertinoHeaderWithActionButton>
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
      <Text style={styles.chooseGame}>Choose a game to begin:</Text>
      <View style={styles.rect1}>
        <Text style={styles.probabilitySimulator}>Probability Simulator</Text>
        <Text style={styles.nlvm}>
          National Library of Virtual Manipulatives
        </Text>
        <Text style={styles.loremIpsum}>
          Welcome to our probability simulator{"\n"}
          {"\n"}The purpose of this app is to help {"\n"}visualize the power of
          probability.
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
    marginLeft: 74
  },
  introHeader: {
    width: 360,
    height: 44,
    backgroundColor: "rgba(190,207,223,1)",
    marginTop: -588
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
    marginTop: 402,
    marginLeft: 74
  },
  chooseGame: {
    color: "rgba(66,66,66,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: -138,
    marginLeft: 85
  },
  rect1: {
    width: 295,
    height: 240,
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
    marginTop: -293,
    marginLeft: 32
  },
  probabilitySimulator: {
    color: "rgba(66,66,66,1)",
    fontSize: 30,
    fontFamily: "roboto-regular",
    marginTop: 31,
    marginLeft: 9
  },
  nlvm: {
    color: "rgba(66,66,66,1)",
    fontSize: 12,
    fontFamily: "roboto-regular",
    marginTop: 14,
    marginLeft: 41
  },
  loremIpsum: {
    width: 263,
    height: 83,
    color: "rgba(66,66,66,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    marginTop: 33,
    marginLeft: 17
  }
});

export default IntroScreen;
