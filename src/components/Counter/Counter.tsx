import { useEffect, useState } from 'react'
import { useReveal } from '../Reveal/useReveal'
import styles from './Counter.module.css'

interface CounterProps {
  target: number
  suffix?: string
  durationMs?: number
}

function Counter({ target, suffix = '', durationMs = 1400 }: CounterProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isVisible) return undefined

    let frame: number
    const start = performance.now()

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [isVisible, target, durationMs])

  return (
    <div ref={ref} className={styles.counter}>
      {value}
      {suffix}
    </div>
  )
}

export default Counter
