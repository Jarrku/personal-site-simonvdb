import * as React from 'react'
import styled from 'styled-components'
import * as differenceInMonths from 'date-fns'
import { helpers, media } from '../util/style-utils'
import Info from './Info'
import { PersonSVG, MailSVG, SendSVG, LocationPinSVG, MapSVG } from '../svg'

const Container = styled.section`
  background-color: ${helpers.light};
  margin-bottom: 0;
  padding: 60px 5%;
  display: flex;
  flex-flow: row wrap;

  ${media.xxlarge`
    padding-left: 12%;
    padding-right: 12%;
  `};
`

interface ItemProps {
  mediumFlex: number
  largeFlex: number
}

const Item =
  styled.div <
  ItemProps >
  `
  flex: 1 100%;
  padding: 10px;

  ${media.medium`
    flex: ${({ mediumFlex }) => mediumFlex};
  `};

  ${media.large`
    flex: ${({ largeFlex }) => largeFlex};
  `};
`

const Title = styled.h2`
  font-weight: 300;
  padding: 0;
  margin: 1rem 0;
  color: rgb(150, 135, 155);
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
  }

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

interface State {
  years?: number
  months?: number
}

export default class Intro extends React.Component<{}, State> {
  state = {
    years: undefined,
    months: undefined,
  }

  componentDidMount() {
    const initialDate = new Date(1994, 7, 5)
    const currentDate = new Date()

    const totalMonths = differenceInMonths(currentDate, initialDate)

    const years = Math.floor(totalMonths / 12)
    const months = totalMonths % 12

    this.setState({ years, months })
  }

  render() {
    const { years, months } = this.state

    return (
      <Container id="intro-container">
        <Item mediumFlex={5} largeFlex={3}>
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
        <Item mediumFlex={6} largeFlex={2}>
          <Title>Information</Title>
          <Info
            text="Simon Van den Broeck"
            PreIcon={PersonSVG}
            ButtonIcon={PersonSVG}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            onClick="https://www.linkedin.com/in/simon-van-den-broeck/"
          />
          <Info
            text="simonvdbroeck@gmail.com"
            PreIcon={MailSVG}
            ButtonIcon={SendSVG}
            aria-label="Click to mail me!"
            onClick="mailto:simonvdbroeck@gmail.com"
          />
          <Info
            text="Buggenhout, Belgium"
            PreIcon={LocationPinSVG}
            ButtonIcon={MapSVG}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Maps Home Location"
            onClick="https://www.google.com/maps/place/9255+Buggenhout/@51.0127098,4.1626156,13z/data=!3m1!4b1!4m5!3m4!1s0x47c3949939888d37:0x332fcf1f7f86382c!8m2!3d51.0136764!4d4.2011261"
          />
        </Item>
      </Container>
    )
  }
}
