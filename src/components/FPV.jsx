import { PointerLockControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useStore } from '../hooks/useStore'

export function FPV() {
  const { camera, gl } = useThree()

  const handleLock = () => {
    useStore.setState({ cameraLocked: true })
  }

  const handleUnlock = () => {
    useStore.setState({ cameraLocked: false })
  }

  return (
    <PointerLockControls
      args={[camera, gl.domElement]}
      onLock={handleLock}
      onUnlock={handleUnlock}
    />
  )
}
