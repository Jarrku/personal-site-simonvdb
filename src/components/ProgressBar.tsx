import * as React from 'react'
import styled from 'styled-components'

import { media } from '../util/style-utils'

const Container = styled.div`
  ${media.medium`
    flex: 0 0 45%;
  `} flex: 1 0 100%;
  margin-bottom: 1.5rem;
  background-color: rgba(0, 0, 0, 0.15);
  display: flex;
`

interface FilledProgressProps {
  width: number
}

const FilledProgress = styled.div<FilledProgressProps>`
  flex: 0 0 ${({ width }) => width}%;
  background-color: rgba(0, 0, 0, 0.15);
  padding-top: 3px;
  padding-bottom: 3px;
  font-weight: 300;
`

interface Props {
  percent: number
}

export default function ProgressBar({ percent }: Props) {
  return (
    <Container>
      <FilledProgress width={percent}>{percent + '%'}</FilledProgress>
    </Container>
  )
}
