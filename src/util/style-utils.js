// style-utils.js
import { css } from 'styled-components'

export const media = {
  small: (...args) => css`
    @media (min-width: 576px) {
      ${css(...args)}
    }
  `,
  medium: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  large: (...args) => css`
    @media (min-width: 992px) {
      ${css(...args)}
    }
  `,
  xlarge: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,
}
