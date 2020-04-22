import { View as GraphicsView } from 'expo-graphics';
import ExpoTHREE, { THREE } from 'expo-three';
import React from 'react';

export default class App extends React.Component {
  componentWillMount() {
    THREE.suppressExpoWarnings();
  }

  render() {
    // Create an `ExpoGraphics.View` covering the whole screen, tell it to call our
    // `onContextCreate` function once it's initialized.
    return (
      <GraphicsView
        onContextCreate={this.onContextCreate}
        onRender={this.onRender}
      />
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
    this.camera.position.z = 40;
    const geometry = new THREE.CylinderGeometry(5.9, 5.9, 1, 32);
    const geometry1 = new THREE.CylinderGeometry(6, 6, 0.99, 32);

    const material = new THREE.MeshPhysicalMaterial({color: 0xB5B3AD,});
    const material1 = new THREE.MeshPhysicalMaterial({color: 0x61462A,});
    
    this.coin = new THREE.Mesh(geometry, material);
    this.coinEdge = new THREE.Mesh(geometry1, material1);
    this.scene.add(this.coin);
    this.scene.add(this.coinEdge);

    this.scene.add(new THREE.AmbientLight(0x404040));

    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(3, 3, 3);
    this.scene.add(light);
  };

  onRender = delta => {
    this.coin.rotation.x += 3.5 * delta;
    //this.coin.rotation.y += 2 * delta;
    this.coinEdge.rotation.x += 3.5 * delta;
    //this.coinEdge.rotation.y += 2 * delta;
    this.renderer.render(this.scene, this.camera);
  };
}
