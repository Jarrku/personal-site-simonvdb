import React, { Fragment } from 'react'
import Welcome from '../components/Welcome'
import Intro from '../components/Intro'
import Skills from '../components/Skills';


class IndexPage extends React.Component {
  render() {
    return (
      <Fragment>
        <Welcome />
        <Intro />
        <Skills />
      </Fragment>
    )
  }
}

export default IndexPage
