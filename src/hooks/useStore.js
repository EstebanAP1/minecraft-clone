import { nanoid } from 'nanoid'
import { create } from 'zustand'

const WORLD = [10, 10]

const defaultCubes = (() => {
  const cubes = []

  for (let x = -5; x < WORLD[0] - 5; x++) {
    for (let z = -5; z < WORLD[1] - 5; z++) {
      const cube = {
        id: nanoid(),
        pos: [x, 1, z],
        texture: 'grass'
      }
      const cube2 = {
        id: nanoid(),
        pos: [x, 0, z],
        texture: 'unbreakable'
      }
      cubes.push(cube)
      cubes.push(cube2)
    }
  }

  return cubes
})()

export const useStore = create((set, get) => ({
  texture: 'dirt',
  cubes: defaultCubes,
  addCube: (x, y, z) => {
    const { cubes } = get()
    const cube = cubes.filter(
      cube => cube.pos[0] === x && cube.pos[1] === y && cube.pos[2] === z
    )[0]
    if (!cube) {
      set(state => ({
        cubes: [
          ...state.cubes,
          {
            id: nanoid(),
            pos: [x, y, z],
            texture: state.texture
          }
        ]
      }))
    }
  },
  removeCube: id => {
    const { cubes } = get()
    const cube = cubes.filter(cube => cube.id === id)[0]
    if (cube.texture === 'unbreakable') return
    set(state => ({
      cubes: state.cubes.filter(cube => cube.id !== id)
    }))
  },
  saveWorld: () => {},
  resetWorld: () => {}
}))
