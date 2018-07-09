import { css, SimpleInterpolation, InterpolationValue } from 'styled-components'

interface MediaSelector {
  [x: string]: (
    str: any,
    ...args: SimpleInterpolation[]
  ) => InterpolationValue[]
}

export const media: MediaSelector = {
  small: (str, ...args) => css`
    @media (min-width: 576px) {
      ${css(str, ...args)};
    }
  `,
  medium: (str, ...args) => css`
    @media (min-width: 768px) {
      ${css(str, ...args)};
    }
  `,
  large: (str, ...args) => css`
    @media (min-width: 992px) {
      ${css(str, ...args)};
    }
  `,
  xlarge: (str, ...args) => css`
    @media (min-width: 1200px) {
      ${css(str, ...args)};
    }
  `,
  xxlarge: (str, ...args) => css`
    @media (min-width: 1400px) {
      ${css(str, ...args)};
    }
  `,
}

export const helpers = {
  light: 'rgba(221, 234, 237, 0.75)',
  dark: 'rgba(38, 101, 114, 0.75)',
  skills: 'background-color: rgba(0,0,0,.15)',
  title: 'rgb(13, 76, 89)',
}
