import * as React from 'react'
import { Props } from './SVGProps'
import DefaultIcon from './DefaultIcon'

export default function SendSVG(props: Props) {
  return (
    <DefaultIcon {...props}>
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </DefaultIcon>
  )
}
