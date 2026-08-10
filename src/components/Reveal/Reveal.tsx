import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { useReveal } from './useReveal'

interface RevealOwnProps {
  as?: ElementType
  delay?: number
  className?: string
  children: ReactNode
}

type RevealProps = RevealOwnProps & Omit<ComponentPropsWithoutRef<'div'>, keyof RevealOwnProps>

function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLElement>()

  return (
    <Tag
      ref={ref}
      className={`reveal${isVisible ? ' reveal--visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
