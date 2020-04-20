import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>PROBABILITY APP FOR KIDS</Text>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Untitled1")}
        style={styles.button}
      >
        <Text style={styles.logIn}>LOG-IN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Untitled2")}
        style={styles.button2}
      >
        <Text style={styles.signUp}>SIGN-UP</Text>
      </TouchableOpacity>
      <Image
        source={require("../assets/images/login_im.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 360,
    height: 73,
    backgroundColor: "rgba(248,132,81,1)"
  },
  loremIpsum: {
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "roboto-700",
    marginTop: 28,
    marginLeft: 4
  },
  button: {
    width: 226,
    height: 45,
    backgroundColor: "rgba(225,137,91,1)",
    marginTop: 297,
    marginLeft: 59
  },
  logIn: {
    color: "#121212",
    fontSize: 25,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 77
  },
  button2: {
    width: 226,
    height: 47,
    backgroundColor: "rgba(220,179,73,1)",
    marginTop: 27,
    marginLeft: 59
  },
  signUp: {
    color: "#121212",
    fontSize: 25,
    fontFamily: "roboto-regular",
    marginTop: 11,
    marginLeft: 74
  },
  image: {
    width: 200,
    height: 200,
    marginTop: -368,
    alignSelf: "center"
  }
});

export default Untitled;
