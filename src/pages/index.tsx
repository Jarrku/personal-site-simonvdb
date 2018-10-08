import * as React from 'react'

import Welcome from '../sections/Welcome'
import Intro from '../sections/Intro'
import Skills from '../sections/Skills'
import Layout from '../components/layouts'

export default function IndexPage() {
  return (
    <Layout>
      <Welcome />
      <Intro />
      <Skills />
    </Layout>
  )
}
