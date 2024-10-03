import { useStore } from '../hooks/useStore'

export function ClickToStart() {
  const { cameraLocked } = useStore()

  if (cameraLocked) return null

  return (
    <div className='click-to-start'>
      <span>Click to start</span>
    </div>
  )
}
