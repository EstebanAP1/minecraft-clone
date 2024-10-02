import { useBox } from '@react-three/cannon'
import * as textures from '../images/textures'
import { useStore } from '../hooks/useStore'
import { useState } from 'react'

const TEXTURES = {
  dirt: 'dirtTexture',
  grass: 'grassTexture',
  glass: 'glassTexture',
  log: 'logTexture',
  wood: 'woodTexture'
}

export function Cube({ id, position, texture }) {
  const [isHovered, setIsHovered] = useState(false)

  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))
  const activeTexture = textures[TEXTURES[texture]]

  const { removeCube, addCube } = useStore()

  const handleClickCube = event => {
    event.stopPropagation()
    if (event.button === 0) removeCube(id)
    if (event.button === 2) {
      const clickedFace = Math.floor(event.faceIndex / 2)
      const [x, y, z] = position
      if (clickedFace === 0) addCube(x + 1, y, z)
      if (clickedFace === 1) addCube(x - 1, y, z)
      if (clickedFace === 2) addCube(x, y + 1, z)
      if (clickedFace === 3) addCube(x, y - 1, z)
      if (clickedFace === 4) addCube(x, y, z + 1)
      if (clickedFace === 5) addCube(x, y, z - 1)
    }
  }

  return (
    <mesh
      onPointerMove={e => {
        e.stopPropagation()
        setIsHovered(true)
      }}
      onPointerLeave={e => {
        e.stopPropagation()
        setIsHovered(false)
      }}
      onClick={handleClickCube}
      ref={ref}>
      <boxGeometry attach={'geometry'} />
      <meshStandardMaterial
        attach={'material'}
        map={activeTexture}
        color={isHovered ? '#ccc' : '#ffffff'}
        transparent
      />
    </mesh>
  )
}
