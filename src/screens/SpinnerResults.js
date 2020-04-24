import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";
import Icon from "react-native-vector-icons/Entypo";
import { PieChart , BarChart, XAxis} from 'react-native-svg-charts'

function SpinnerResults({navigation}) {

  const random = require('random');

  var temp = useState(0);
  temp = navigation.getParam('red');

  var totalSpins = JSON.stringify(temp);

  var red = 0;
  var blue = 0;
  var green = 0;
  var yellow = 0;

  var rng = 0 ;

  for(var i = 0 ; i < totalSpins ; i++)
  {
    rng = random.int(min = 1, max = 101);

    if ( rng > 75 )
      red++;
    else if ( rng > 50 && rng <= 75 )
      blue++;
    else if ( rng > 25 && rng <= 50 )
      green++;
    else
      yellow++;
  }

  const data = [ red, blue, green, yellow ];

  const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7);

  const pieData = data
  .filter((value) => value > 0)
  .map((value, index) => ({
      value,
      svg: {
          fill: randomColor(),
          onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
  }))

  return (

    <View style={styles.container}>

      {/*Back Butoon*/}
      <View style={styles.icon1Stack}>
            <Icon name="chevron-left" style={styles.icon1}></Icon>
            <TouchableOpacity
              onPress={() => navigation.navigate("Spinner")}
              style={styles.button2}
            ></TouchableOpacity>
        </View>

      {/*Create a pie chart to display Data*/}
      <PieChart style={styles.PieChart} data={pieData}/> 

      <Text style={styles.results}>
        Red: {red}{"\n"}
        Blue: {blue}{"\n"}
        Green: {green}{"\n"}
        Yellow: {yellow}
      </Text>

      {/*Play Again Button*/}
      <View style={styles.srButtonStack}>
        <CupertinoButtonDanger
          text1="Play Again"
          button1="Spinner"
          style={styles.srButton}
        ></CupertinoButtonDanger>
        <TouchableOpacity
          onPress={() => navigation.navigate("Spinner")}
          style={styles.sRonClick}
        ></TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "rgba(143, 216, 255,1)"
  },

  results: {
    top:100,
    fontSize:20,
    fontFamily: "aldrich-regular",
    alignSelf: "center"
  },

 PieChart:
 {
      height: 200,
      top: 70
 },

  //Play Again Button Style
  srButton: {
    top: 0,
    left: 0,
    width: 209,
    height: 52,
    backgroundColor: "rgba(57, 227, 48,1)",
    position: "absolute",
    borderRadius: 100,
  },

  sRonClick: {
    top: 0,
    left: 3,
    width: 209,
    height: 52,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0
  },

  srButtonStack: {
    width: 212,
    height: 52,
    alignSelf: "center",
    top: 650
  },

  //Back Button Style 
  icon1Stack: {
    width: 43,
    height: 47
  },

  icon1: {
    top: 50,
    left: 10,
    position: "absolute",
    color: "rgba(9,8,8,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },

  button2: {
    top: 50,
    left: 10,
    width: 43,
    height: 47,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0.25
  },

});

export default SpinnerResults;
