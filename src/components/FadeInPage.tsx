import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

interface FadeInPageProps {
  show: boolean
}

const FadeInPage = styled.div<FadeInPageProps>`
  ${({ show }) => (show ? `animation: .5s ${fadeIn} ease-out` : `opacity: 0`)};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default FadeInPage
