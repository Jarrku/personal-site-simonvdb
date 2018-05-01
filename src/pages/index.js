import React, { Fragment } from 'react'
import Welcome from '../components/Welcome'
import Intro from '../components/Intro'


class IndexPage extends React.Component {
  render() {
    return (
      <Fragment>
        <Welcome />
        <Intro />
      </Fragment>
    )
  }
}

export default IndexPage
