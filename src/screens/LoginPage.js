import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";
import MaterialFixedLabelTextbox1 from "../components/MaterialFixedLabelTextbox1";

function LoginPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.icon1StackRow}>
          <View style={styles.icon1Stack}>
            <Icon name="chevron-left" style={styles.icon1}></Icon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("HomeScreen")}
              style={styles.button2}
            ></TouchableOpacity>
          </View>
          <Text style={styles.logIn}>LOG IN</Text>
        </View>
      </View>
      <MaterialFixedLabelTextbox
        style={styles.materialFixedLabelTextbox1}
      ></MaterialFixedLabelTextbox>
      <MaterialFixedLabelTextbox1
        style={styles.materialFixedLabelTextbox12}
      ></MaterialFixedLabelTextbox1>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("IntroScreen")}
        style={styles.button}
      >
        <Text style={styles.logIn2}>LOG-IN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 360,
    height: 74,
    backgroundColor: "rgba(248,132,81,1)",
    flexDirection: "row"
  },
  icon1: {
    top: 3,
    left: 0,
    position: "absolute",
    color: "rgba(9,8,8,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  button2: {
    top: 0,
    left: 0,
    width: 43,
    height: 47,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0.25
  },
  icon1Stack: {
    width: 43,
    height: 47
  },
  logIn: {
    color: "#121212",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginLeft: 17,
    marginTop: 11
  },
  icon1StackRow: {
    height: 47,
    flexDirection: "row",
    flex: 1,
    marginRight: 206,
    marginLeft: 12,
    marginTop: 14
  },
  materialFixedLabelTextbox1: {
    width: 309,
    height: 43,
    marginTop: 236,
    alignSelf: "center"
  },
  materialFixedLabelTextbox12: {
    width: 312,
    height: 43,
    marginTop: -131,
    marginLeft: 23
  },
  button: {
    width: 132,
    height: 50,
    backgroundColor: "rgba(248,65,65,1)",
    marginTop: 145,
    marginLeft: 113
  },
  logIn2: {
    color: "rgba(255,255,255,1)",
    fontSize: 27,
    fontFamily: "roboto-regular",
    marginTop: 12,
    marginLeft: 23
  }
});

export default LoginPage;
