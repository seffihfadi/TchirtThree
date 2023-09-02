import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'

import Camera from './Camera'
import Backdrop from './Backdrop'
import Shirt from './Shirt'

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{fov: 27, position: [0, 0, 0]}}
      gl={{preserveDrawingBuffer: true}}
      className='w-full max-w-full h-full ease-in transition-all'
    >
      <ambientLight intensity={0.6} />
      <Environment preset='city' />
      <Camera>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </Camera>
    </Canvas>
  )
}

export default CanvasModel