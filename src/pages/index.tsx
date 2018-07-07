import * as React from 'react'

import Welcome from '../sections/Welcome'
import Intro from '../sections/Intro'
import Skills from '../sections/Skills'

export default function IndexPage() {
  return (
    <React.Fragment>
      <Welcome />
      <Intro />
      <Skills />
    </React.Fragment>
  )
}
