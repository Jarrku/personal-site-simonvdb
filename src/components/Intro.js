import React from 'react'
import styled from 'styled-components'
import { helpers, media } from '../util/style-utils'
import differenceInYears from 'date-fns/difference_in_years'
import differenceInMonths from 'date-fns/difference_in_months'
import { differenceInSeconds } from 'date-fns'

const Container = styled.section`
  background-color: ${helpers.light};
  margin-bottom: 0;
  padding: 60px 5%;
  display: flex;
  flex-flow: row wrap;

  ${media.large`
  padding-left: 10%;
  padding-right: 10%;
`};
  ${media.xlarge`
    padding-left: 15%;
    padding-right: 15%;
  `};
`

const Item = styled.div`
  flex: 1 100%;
  padding: 20px;

  ${media.small`
    flex: ${({ flex }) => flex};
  `};
`

const Title = styled.h2`
  font-weight: 300;
  padding: 0;
  margin: 1rem 0;
  color: rgba(0, 0, 255, 0.7);
  font-size: 34px;

  ${media.medium`
    font-size: 45px;
  `};
`

const P = styled.p`
  line-height: 1.5;
  font-weight: 300;

  strong {
    font-weight: 500;
  };

  ${media.small`
    line-height: 2.672rem;
    font-size: 1.344rem;
  `};

  ${media.medium`
    line-height: 2.88rem;
    font-size: 1.536rem;
  `};

  ${media.large`
    line-height: 2.88rem;
    font-size: 1.68rem;
  `};
`

export default class Intro extends React.Component {
  state = {
    years: null,
    months: null,
  }

  componentDidMount() {
    const initialDate = new Date(1994, 7, 5)
    const currentDate = new Date()

    // const years = differenceInYears(currentDate, initialDate);
    const totalMonths = differenceInMonths(currentDate, initialDate)

    const years = Math.floor(totalMonths / 12)
    const months = totalMonths % 12

    this.setState({ years, months })
  }

  render() {
    const { years, months, seconds } = this.state

    return (
      <Container id="intro-container">
        <Item flex={3}>
          <Title>Who am I?</Title>
          <P>
            My name is <strong>Simon Van den Broeck</strong>. I'm{' '}
            <strong>
              {years} years and {months} months{' '}
            </strong>{' '}
            old and live in <strong>Buggenhout, Belgium</strong>. I'm an
            ambitious developer, passionate about new technology and its
            capabilities. I am inspired by fast-growing companies and hope to
            become the lead of one in the future.
          </P>
        </Item>
        <Item flex={2}>
          <Title>Information</Title>
          <P>Ives van Hoorne</P>
          <P>me@ivesvh.com</P>
          <P>Enschede, Netherlands</P>
        </Item>
      </Container>
    )
  }
}
