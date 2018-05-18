import * as React from 'react'

import Welcome from '../components/Welcome'
import Intro from '../components/Intro'
import Skills from '../components/Skills';

class IndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Welcome />
        <Intro />
        <Skills />
      </React.Fragment>
    )
  }
}

export default IndexPage
