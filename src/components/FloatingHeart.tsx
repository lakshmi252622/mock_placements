import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Shape, ExtrudeGeometry } from 'three';

export function FloatingHeart() {
  const meshRef = useRef<Mesh>(null);

  // Create heart shape with improved curves
  const heartShape = new Shape();
  
  // Starting point at the bottom tip
  heartShape.moveTo(0, -1.5);
  
  // Right curve
  heartShape.bezierCurveTo(
    2, -1.5,  // control point 1
    2, 0.5,   // control point 2
    0, 2      // end point
  );
  
  // Left curve
  heartShape.bezierCurveTo(
    -2, 0.5,  // control point 1
    -2, -1.5, // control point 2
    0, -1.5   // end point
  );

  const extrudeSettings = {
    depth: 1,
    bevelEnabled: true,
    bevelSegments: 5,
    steps: 2,
    bevelSize: 0.2,
    bevelThickness: 0.2
  };

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Smooth floating animation
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    
    // Gentle rotation
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <mesh ref={meshRef} scale={0.6} rotation={[0, 0, Math.PI]}>
      <extrudeGeometry args={[heartShape, extrudeSettings]} />
      <meshStandardMaterial
        color="#ffffff"
        metalness={0.3}
        roughness={0.2}
        emissive="#ff69b4"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}