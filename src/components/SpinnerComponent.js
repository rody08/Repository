import React, { Component } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class SpinnerComponent extends Component{

  constructor() {
    super()
    this.animated = new Animated.Value(0);
  }

  animate() {
    this.animated.setValue(0)
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }
  
  render() {      

    const spin = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '4320deg']});

    const transform = [
      {rotateX: spin},
      {perspective: 1000}]; 

    return (
      <View style={styles.container}>
        <Animated.View style={{ transform }}>
         <TouchableOpacity 
            style={styles.circle}
            title="Spin" onPress={() => { this.animate() }}>
            <Text style = {styles.text}>$</Text>
         </TouchableOpacity>
        </Animated.View>
    </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  circle: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center"
  },

  text: {
    color: 'black',
    fontSize: 40,
    fontWeight: "bold"
  }
  
});
