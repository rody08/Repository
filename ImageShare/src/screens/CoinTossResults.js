import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";

function CoinTossResults(props) {
  return (
    <View style={styles.container}>

      <View style={styles.headsRow}>
        <Text style={styles.heads}> Heads </Text>
        <Text style={styles.tails}> Tails </Text>
      </View>

      <View style={styles.rectHeadsRow}>
        <View style={styles.rectHeads}></View>
        <View style={styles.rectTails}></View>
      </View>

      <View style={styles.ctrButtonStack}>
        <CupertinoButtonDanger
          text1="Play Again"
          button1="CoinToss"
          style={styles.ctrButton}
        ></CupertinoButtonDanger>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("CoinToss")}
          style={styles.ctRonClick}
        ></TouchableOpacity>
      </View>

      <View style={styles.rect2}>
        <Text style={styles.htResults}>
          The results are:
          {"\n"} 
          {"\n"} 50% Heads
          {"\n"} 50% Tails
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
  heads: {
    color: "rgba(66,66,66,1)",
    fontSize: 14,
    fontFamily: "aldrich-regular"
  },
  tails: {
    color: "rgba(66,66,66,1)",
    fontSize: 14,
    fontFamily: "aldrich-regular",
    marginLeft: 21
  },
  headsRow: {
    height: 14,
    flexDirection: "row",
    marginTop: 73,
    marginLeft: 128,
    marginRight: 136
  },
  rectHeads: {
    width: 30,
    height: 116,
    backgroundColor: "rgba(29,15,181,1)",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.45
  },
  rectTails: {
    width: 30,
    height: 116,
    backgroundColor: "rgba(29,15,181,1)",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.45,
    marginLeft: 30
  },
  rectHeadsRow: {
    height: 116,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 133,
    marginRight: 137
  },
  ctrButton: {
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
  ctRonClick: {
    top: 0,
    left: 7,
    width: 209,
    height: 52,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0
  },
  ctrButtonStack: {
    width: 216,
    height: 52,
    marginTop: 400,
    marginLeft: 90
  },

  rect2: {
    width: 259,
    height: 186,
    backgroundColor: "rgba(239,221,205,1)",
    borderRadius: 33,
    borderColor: "rgba(255,87,0,1)",
    borderWidth: 3,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.45,
    marginTop: -375,
    marginLeft: 65
  },

  htResults: {
    color: "rgba(66,66,66,1)",
    fontSize: 26,
    fontFamily: "roboto-regular",
    marginTop: 30,
    marginLeft: 33
  }
});

export default CoinTossResults;
