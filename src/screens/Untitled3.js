import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";
import MaterialButtonSuccess4 from "../components/MaterialButtonSuccess4";
import MaterialButtonSuccess1 from "../components/MaterialButtonSuccess1";
import MaterialButtonSuccess5 from "../components/MaterialButtonSuccess5";
import MaterialButtonSuccess2 from "../components/MaterialButtonSuccess2";
import MaterialButtonSuccess6 from "../components/MaterialButtonSuccess6";
import MaterialButtonSuccess3 from "../components/MaterialButtonSuccess3";
import MaterialButtonSuccess7 from "../components/MaterialButtonSuccess7";
import MaterialButtonSuccess8 from "../components/MaterialButtonSuccess8";
import MaterialButtonSuccess9 from "../components/MaterialButtonSuccess9";
import MaterialButtonSuccess10 from "../components/MaterialButtonSuccess10";
import MaterialButtonSuccess11 from "../components/MaterialButtonSuccess11";
import MaterialButtonSuccess12 from "../components/MaterialButtonSuccess12";

function Untitled3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.welcome}>WELCOME</Text>
      </View>
      <Text style={styles.loremIpsum}>
        Hello User, {"\n"}Probability simulator is a fun and innovative
        mathematical application.{"\n"}Please choose the grade:
      </Text>
      <View style={styles.materialButtonSuccessRow}>
        <MaterialButtonSuccess
          text1="pre-K"
          style={styles.materialButtonSuccess}
        ></MaterialButtonSuccess>
        <MaterialButtonSuccess4
          text1="Grade 1"
          style={styles.materialButtonSuccess4}
        ></MaterialButtonSuccess4>
      </View>
      <View style={styles.materialButtonSuccess1Row}>
        <MaterialButtonSuccess1
          text1="Grade 2"
          style={styles.materialButtonSuccess1}
        ></MaterialButtonSuccess1>
        <MaterialButtonSuccess5
          text1="Grade 3"
          style={styles.materialButtonSuccess5}
        ></MaterialButtonSuccess5>
      </View>
      <View style={styles.materialButtonSuccess2Row}>
        <MaterialButtonSuccess2
          text1="Grade 4"
          style={styles.materialButtonSuccess2}
        ></MaterialButtonSuccess2>
        <MaterialButtonSuccess6
          text1="Grade 5"
          style={styles.materialButtonSuccess6}
        ></MaterialButtonSuccess6>
      </View>
      <View style={styles.materialButtonSuccess3Row}>
        <MaterialButtonSuccess3
          text1="Grade 6"
          style={styles.materialButtonSuccess3}
        ></MaterialButtonSuccess3>
        <MaterialButtonSuccess7
          text1="Grade 7"
          style={styles.materialButtonSuccess7}
        ></MaterialButtonSuccess7>
      </View>
      <View style={styles.materialButtonSuccess8Row}>
        <MaterialButtonSuccess8
          text1="Grade 8"
          style={styles.materialButtonSuccess8}
        ></MaterialButtonSuccess8>
        <MaterialButtonSuccess9
          text1="Grade 9"
          style={styles.materialButtonSuccess9}
        ></MaterialButtonSuccess9>
      </View>
      <View style={styles.materialButtonSuccess10Row}>
        <MaterialButtonSuccess10
          text1="Grade 10"
          style={styles.materialButtonSuccess10}
        ></MaterialButtonSuccess10>
        <MaterialButtonSuccess11
          text1="Grade 11"
          style={styles.materialButtonSuccess11}
        ></MaterialButtonSuccess11>
      </View>
      <MaterialButtonSuccess12
        text1="Grade 12"
        style={styles.materialButtonSuccess12}
      ></MaterialButtonSuccess12>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 360,
    height: 81,
    backgroundColor: "rgba(248,132,81,1)",
    alignSelf: "center"
  },
  welcome: {
    width: 166,
    height: 41,
    color: "#121212",
    fontSize: 27,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginTop: 32,
    marginLeft: 82
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 8
  },
  materialButtonSuccess: {
    width: 100,
    height: 36,
    marginTop: 1
  },
  materialButtonSuccess4: {
    width: 100,
    height: 36,
    marginLeft: 22
  },
  materialButtonSuccessRow: {
    height: 37,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 22,
    marginRight: 116
  },
  materialButtonSuccess1: {
    width: 100,
    height: 36,
    marginTop: 1
  },
  materialButtonSuccess5: {
    width: 100,
    height: 36,
    marginLeft: 21
  },
  materialButtonSuccess1Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 23,
    marginRight: 116
  },
  materialButtonSuccess2: {
    width: 100,
    height: 36
  },
  materialButtonSuccess6: {
    width: 100,
    height: 36,
    marginLeft: 24,
    marginTop: 2
  },
  materialButtonSuccess2Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 22,
    marginRight: 114
  },
  materialButtonSuccess3: {
    width: 100,
    height: 36
  },
  materialButtonSuccess7: {
    width: 100,
    height: 36,
    marginLeft: 23
  },
  materialButtonSuccess3Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 21,
    marginRight: 116
  },
  materialButtonSuccess8: {
    width: 100,
    height: 36
  },
  materialButtonSuccess9: {
    width: 100,
    height: 36,
    marginLeft: 22,
    marginTop: 1
  },
  materialButtonSuccess8Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 22,
    marginRight: 116
  },
  materialButtonSuccess10: {
    width: 100,
    height: 36
  },
  materialButtonSuccess11: {
    width: 100,
    height: 36,
    marginLeft: 21,
    marginTop: 2
  },
  materialButtonSuccess10Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 22,
    marginRight: 117
  },
  materialButtonSuccess12: {
    width: 100,
    height: 36,
    marginTop: 21,
    marginLeft: 22
  }
});

export default Untitled3;
