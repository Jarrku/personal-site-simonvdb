import * as React from 'react'
import { Props } from './SVGProps'

type DefaultIconProps = Props & {
  children: React.ReactNode
}

export default function DefaultIcon({ children, ...props }: DefaultIconProps) {
  return (
    <svg
      fill="#000000"
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  )
}
