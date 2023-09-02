import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import { 
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'
import { Button } from '../components'


const Home = () => {
  const snap = useSnapshot(state)
  //console.log('snap', snap)
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>

          <motion.header {...slideAnimation('down')}>
            <img 
              src="./threejs.png" 
              alt="logo" 
              className="object-contain w-8 h-8"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                let's get<br className="lg:block hidden" /> it done
              </h1>
            </motion.div>
            
            <motion.div 
              className="flex flex-col gap-5"
              {...headContentAnimation}
            >
              <p className="max-w-md text-gray-600">
                Design your one-of-a-kind shirt using our innovative 3D customization tool. <strong>Let your creativity run wild</strong> and express your unique style.
              </p>
              <Button
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false} 
                customStyles="text-sm"
              />
            </motion.div>
          </motion.div>

        </motion.section> 
      )}
    </AnimatePresence>
  )
}

export default Home