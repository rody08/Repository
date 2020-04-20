import React, { Component } from "react";
import { Animated, Easing, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

spinValue = new Animated.Value(0)

//set up animation with interpolation (0 to 1)
Animated.timing(
    this.spinValue,
  {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear,
    useNativeDriver: true
  }
).start()

const spin = this.spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg']
})

function Coin(props) {
  return (
    <View style={[styles.container, props.style]}>
      
          <Animated.Image
          style={{transform: [{rotate: spin}] }}
          source={{uri: 'https://static.timesofisrael.com/www/uploads/2020/01/Untitled-28.jpg'}} />

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
