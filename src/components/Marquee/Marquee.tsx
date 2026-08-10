import styles from './Marquee.module.css'

interface MarqueeProps {
  items: string[]
}

function Marquee({ items }: MarqueeProps) {
  const track = (
    <div className={styles['marquee__group']}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  )

  return (
    <div className={styles.marquee}>
      <div className={styles['marquee__track']}>
        {track}
        {track}
      </div>
    </div>
  )
}

export default Marquee
