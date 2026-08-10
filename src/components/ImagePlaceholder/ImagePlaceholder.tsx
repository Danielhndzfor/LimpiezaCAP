import type { CSSProperties } from 'react'
import styles from './ImagePlaceholder.module.css'

interface ImagePlaceholderProps {
  label: string
  icon?: string
  className?: string
  style?: CSSProperties
}

function ImagePlaceholder({ label, icon = '🫧', className = '', style }: ImagePlaceholderProps) {
  return (
    <div className={`${styles['image-placeholder']}${className ? ` ${className}` : ''}`} style={style}>
      <span className={styles['image-placeholder__icon']}>{icon}</span>
      <span className={styles['image-placeholder__label']}>{label}</span>
    </div>
  )
}

export default ImagePlaceholder
