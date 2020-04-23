import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";
import Icon from "react-native-vector-icons/Entypo";
import { PieChart } from 'react-native-svg-charts'

function CoinTossResults({ navigation }) {

  const random = require('random');
  var spinCount = useState(0);
  spinCount = navigation.getParam('x');
  var temp = JSON.stringify(spinCount);
  var heads = 0;
  var tails = 0;
  var rng = 0 ;

  for(var i = 0 ; i < temp ; i++)
  {
    rng = random.int(min = 0, max = 100);
    if ( rng > 49 )
      heads++;
    else
      tails++;
  }

  const data = [heads,tails]

  const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

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
      
      <PieChart style={{ height: 200 }} data={pieData} /> 

      <Text style={styles.results}>
        Spins: {JSON.stringify(spinCount)}{"\n"}
        RNG: {rng}{"\n"}
        Heads: {heads}{"\n"}
        Tails: {tails}
      </Text>

      <View style={styles.icon1Stack}>
        <Icon name="chevron-left" style={styles.icon1}></Icon>
          <TouchableOpacity
            onPress={() => navigation.navigate("IntroScreen")}
            style={styles.button2}
          ></TouchableOpacity>
      </View>

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
          onPress={() => navigation.navigate("CoinToss")}
          style={styles.ctRonClick}
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
    top:200,
    fontSize:20,
    fontFamily: "aldrich-regular",
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
    marginLeft: 25
  },

  headsRow: {
    height: 15,
    flexDirection: "row",
    marginTop: 75,
    marginLeft: 130,
    marginRight: 135
  },

  rectHeads: {
    width: 30,
    height: 115,
    backgroundColor: "rgba(255,0,0,1)",
    shadowOffset: {
      height: 20,
      width: 20
    },
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 1
  },

  rectTails: {
    width: 30,
    height: 115,
    backgroundColor: "rgba(29,15,181,1)",
    shadowOffset: {
      height: 20,
      width: 20
    },
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 1,
    marginLeft: 60
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
    backgroundColor: "rgba(57, 227, 48,1)",
    position: "absolute",
    borderRadius: 100,
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
    top: 640,
    marginLeft: 90
  },

  

  //Back button 
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

export default CoinTossResults;
