import { useEffect } from 'react'
import { useState } from 'react'

const MOVEMENT_KEYS_MAP = {
  KeyW: 'moveForward',
  KeyA: 'moveLeft',
  KeyS: 'moveBackward',
  KeyD: 'moveRight',
  Space: 'jump',
  ShiftLeft: 'run'
}

export const useMovement = () => {
  const [movements, setMovements] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    run: false
  })

  useEffect(() => {
    const handleKeyDown = event => {
      event.preventDefault()
      const { code } = event
      const movement = MOVEMENT_KEYS_MAP[code]
      if (movement) {
        // if (!movements[movement]) return
        setMovements(prevMovement => ({
          ...prevMovement,
          [movement]: true
        }))
      }
    }

    const handleKeyUp = event => {
      const { code } = event
      const movement = MOVEMENT_KEYS_MAP[code]

      if (movement) {
        setMovements(prevMovement => ({
          ...prevMovement,
          [movement]: false
        }))
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return movements
}
