import { useStore } from '../hooks/useStore'
import { useEffect } from 'react'
import * as images from '../images/images'
import { TEXTURES_KEYS_MAP } from '../lib/consts'

export function TextureSelector() {
  const { texture } = useStore()

  useEffect(() => {
    const handleKeyDown = event => {
      event.preventDefault()
      const { code } = event
      const texture = TEXTURES_KEYS_MAP[code]
      if (texture) {
        useStore.setState({ texture })
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className='texture-selector'>
      {Object.entries(images).map(([imgKey, image], index) => {
        return (
          <div key={imgKey}>
            <span>{index + 1}</span>
            <img
              src={image}
              alt={imgKey}
              className={
                texture === imgKey.replace('Img', '') ? 'selected' : ''
              }
            />
          </div>
        )
      })}
    </div>
  )
}
