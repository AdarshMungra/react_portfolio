import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene = () => {
  const sceneRef = useRef();
  const cameraRef = useRef();
  const controlsRef = useRef();

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xaaaaaa);

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(10, 0, 10);

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    sceneRef.current.appendChild(renderer.domElement);

    // Add a grid
    const gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);

    // Set up camera controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 5;
    controls.maxDistance = 20;

    cameraRef.current = camera;
    controlsRef.current = controls;

    // Animate the scene
    const animate = () => {
      requestAnimationFrame(animate);
      // Rotate the camera, or you can add your animations here
      cameraRef.current.rotation.y += 0.005;
      controlsRef.current.update(); // Update camera controls
      renderer.render(scene, cameraRef.current);
    };

    animate();

    // Clean up
    return () => {
      // Dispose of resources to prevent memory leaks
      renderer.dispose();
    };
  }, []);

  return <div ref={sceneRef} />;
};

export default ThreeScene;
