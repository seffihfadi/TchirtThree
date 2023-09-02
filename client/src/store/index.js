import { proxy } from "valtio"

const state = proxy({
  intro: true,
  color: '#4c8bd5',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './mong.png',
  fullDecal: './threejs.png'
})

export default state