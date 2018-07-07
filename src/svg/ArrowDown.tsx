import * as React from 'react'
import { Props } from './SVGProps'
import DefaultIcon from './DefaultIcon'

export default function ArrowDownSVG(props: Props) {
  return (
    <DefaultIcon {...props}>
      <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
      <path d="M0-.75h24v24H0z" fill="none" />
    </DefaultIcon>
  )
}
