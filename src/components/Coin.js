import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Coin(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 143.00 143.00" style={styles.ellipse}>
        <Ellipse
          strokeWidth={17}
          fill="rgba(255,135,34,1)"
          stroke="rgba(255,201,0,1)"
          cx={72}
          cy={72}
          rx={63}
          ry={63}
        ></Ellipse>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  ellipse: {
    width: 143,
    height: 143
  }
});

export default Coin;
