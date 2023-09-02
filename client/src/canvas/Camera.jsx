import { useRef } from "react"
import { useSnapshot } from "valtio"
import state from "../store"
import { easing } from "maath"
import { useFrame } from "@react-three/fiber"

const Camera = ({ children }) => {
  const snap = useSnapshot(state)
  const groupRef = useRef()
  // set rotation smoothly

  useFrame((state, delta) => {
    const isBreak = window.innerWidth <= 1260
    const isMobile = window.innerWidth <= 600

    //set the initial position of the model
    let targetPosition = [-0.4, 0, 2];
    if(snap.intro) {
      if(isBreak) targetPosition = [0, 0, 2]
      if(isMobile) targetPosition = [0, 0.2, 2.5]
    } else {
      if(isMobile) targetPosition = [0, 0, 2.5]
      else targetPosition = [0, 0, 2]
    }
    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta)
    easing.dampE(
      groupRef.current.rotation, 
      [state.pointer.y / 10, state.pointer.x / 5, 0],
      0.25, delta
    )
  })

  return (
    <group ref={groupRef}>
      {children}
    </group>
  )
}

export default Camera