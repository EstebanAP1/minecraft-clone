import { useStore } from '../hooks/useStore'

export function WorldOptions() {
  const { resetWorld, saveWorld } = useStore()
  return (
    <div className='world-options'>
      <div>
        <button onClick={saveWorld}>Save World</button>
        <button onClick={resetWorld}>Reset World</button>
      </div>
      <span>Press escape to exit</span>
    </div>
  )
}
