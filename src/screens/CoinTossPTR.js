import { View as GraphicsView } from 'expo-graphics';
import ExpoTHREE, { THREE } from 'expo-three';
import { EventRegister } from 'react-native-event-listeners'
import React, { useState } from 'react';
import { Animated, StyleSheet, Text, View, Button } from "react-native";

export default class App extends React.Component {
    
    animated = new Animated.Value(0);
      constructor(props) {
          super(props)
          this.state = {
              data: 'no data',
          }
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
        const count = useState(0);
        const setCount = useState(0);
        return (
                <View style={styles.container}>
                  <GraphicsView
                    onContextCreate={this.onContextCreate}
                    onRender={this.onRender}
                    >
                </GraphicsView>
                  <Text>You clicked {count} times.</Text>
                    <Button
                        onPress={() => setCount(count + 1)}
                        title="Click me"
                        color="red"
                        accessibilityLabel="Click this button to increase count"
                    />
                </View>
      );
    }

  // This is called by the `ExpoGraphics.View` once it's initialized
  onContextCreate = async ({
    gl,
    canvas,
    width,
    height,
    scale: pixelRatio,
  }) => {    

    this.renderer = new ExpoTHREE.Renderer({ gl, pixelRatio, width, height });
    this.renderer.setClearColor(0xffffff)
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 100;

    //Create the final object to add to the scene
    const geometry = new THREE.CylinderGeometry(5.9, 5.9, 1, 32);
    const geometry1 = new THREE.CylinderGeometry(6, 6, 0.99, 32);

    const material = new THREE.MeshPhysicalMaterial({color: 0xF4D03F,});
    const material1 = new THREE.MeshPhysicalMaterial({color: 0x61462A,});
    
    this.coin = new THREE.Mesh(geometry, material);
    this.coinEdge = new THREE.Mesh(geometry1, material1);
    this.scene.add(this.coin);
    this.scene.add(this.coinEdge); 

    this.scene.add(new THREE.AmbientLight(0x404040));

    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(-4, 4, 10);
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
