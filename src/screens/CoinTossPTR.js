import { View as GraphicsView } from 'expo-graphics';
import ExpoTHREE, { THREE } from 'expo-three';
import { EventRegister } from 'react-native-event-listeners'
import React, { useState } from 'react';
import { Animated, StyleSheet, styles, View, Button } from "react-native";

export default class App extends React.Component {

    animated = new Animated.Value(0);
      constructor(props) {
          super(props)
        };

    animate() {
        this.animated.setValue(0)
        Animated.timing(this.animated, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true, 
        }).start();
    }

    render() {
    // Create an `ExpoGraphics.View` covering the whole screen, tell it to call our
    // `onContextCreate` function once it's initialized.
        THREE.suppressExpoWarnings();

        return (
                  <GraphicsView
                    onContextCreate={this.onContextCreate}
                    onRender={this.onRender}>
                  </GraphicsView>
      );
    }

  // This is called by the `ExpoGraphics.View` once it's initialized
  onContextCreate = async ({
    gl,
    width,
    height,
    scale: pixelRatio,
  }) => {    

    this.renderer = new ExpoTHREE.Renderer({ gl, pixelRatio, width, height });
    this.renderer.setClearColor(0xffffff)
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 40;

    //Create the final object to add to the scene
    const geometry = new THREE.CylinderGeometry(5.89, 5.89, 1, 32);
    const geometry1 = new THREE.CylinderGeometry(6, 6, 0.9, 32);

    const material = new THREE.MeshPhysicalMaterial({color: 0xF4D03F,});
    const material1 = new THREE.MeshPhysicalMaterial({color: 0xFCEC33,});
    
    this.coin = new THREE.Mesh(geometry, material);
    this.coinEdge = new THREE.Mesh(geometry1, material1);
    this.scene.add(this.coin);
    this.scene.add(this.coinEdge); 

    this.scene.add(new THREE.AmbientLight(0x404040));

    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(0, 4, 10);
    this.scene.add(light);

    var y = new THREE.Vector3(0,1,0);
    let coinClicked = false

    this.listener = EventRegister.addEventListener('click', (data) => {
      this.setState({
        data,
      })
    })

  }

  onRender = delta => {
        
        this.coinEdge.rotation.x += 3.5 * delta;
        this.coin.rotation.x += 3.5 * delta;
        this.renderer.render(this.scene, this.camera);
  }

   styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    }
  });
}
