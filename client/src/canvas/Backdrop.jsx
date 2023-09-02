import { easing } from "maath"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei"

const Backdrop = () => {
  const shadowsRef = useRef()
  return (
    <AccumulativeShadows
      ref={shadowsRef}
      temporal
      frames={50}
      alphaTest={0.15}
      scale={90}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.15]}
    >
      <RandomizedLight 
        amount={4} 
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
        
      />
      <RandomizedLight 
        amount={4} 
        radius={6}
        intensity={0.25}
        ambient={0.5}
        position={[-5, 5, -8]}
        
      />
    </AccumulativeShadows>
  )
}

export default Backdrop