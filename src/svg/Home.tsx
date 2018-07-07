import * as React from 'react'
import { Props } from './SVGProps'
import DefaultIcon from './DefaultIcon'

export default function HomeSVG(props: Props) {
  return (
    <DefaultIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </DefaultIcon>
  )
}
