import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonPink from "./components/MaterialButtonPink";

function Index(props) {
  return (
    <View style={styles.container}>
      <MaterialButtonPink
        style={styles.materialButtonPink}
      ></MaterialButtonPink>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 36
  },
  materialButtonPink: {
    width: 100,
    height: 36
  }
});

export default Index;
