import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'
import { Decal, useTexture, useGLTF } from '@react-three/drei'
import state from '../store'

const Shirt = () => {
  const snap = useSnapshot(state)
  const {nodes, materials} = useGLTF('./shirt_baked.glb')
  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)

  // set the color smouthly
  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));
  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
        
      >
        {snap.isFullTexture && (
          <Decal 
            position={[0, 0, 0.43]}
            rotation={[0, 0, 0]}
            scale={.9}
            map={fullTexture}
            
          />
        )}
        {snap.isLogoTexture && (
          <Decal 
            position={[0, 0.05, 0.14]}
            rotation={[0, 0, 0]}
            scale={0.14}
            map={logoTexture}
            //map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}

      </mesh>
    </group>
  )
}

export default Shirt