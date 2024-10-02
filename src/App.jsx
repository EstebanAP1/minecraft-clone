import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FPV as Fpv } from './components/FPV'
import { Player } from './components/Player'
import { Cubes } from './components/Cubes'
import { TextureSelector } from './components/TextureSelect'

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 100]} />
        <ambientLight intensity={1} />
        <Fpv />
        <Physics gravity={[0, -9.8, 0]}>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <TextureSelector />
      <div className='pointer'>+</div>
    </>
  )
}

export default App
