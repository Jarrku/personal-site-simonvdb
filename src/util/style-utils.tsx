import { css } from 'styled-components'

export const media = {
  small: (...args: any[]) => css`
    @media (min-width: 576px) {
      ${css(...args)};
    }
  `,
  medium: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)};
    }
  `,
  large: (...args: any[]) => css`
    @media (min-width: 992px) {
      ${css(...args)};
    }
  `,
  xlarge: (...args: any[]) => css`
    @media (min-width: 1200px) {
      ${css(...args)};
    }
  `,
  xxlarge: (...args: any[]) => css`
    @media (min-width: 1400px) {
      ${css(...args)};
    }
  `,
}

export const helpers = {
  light: 'rgba(221, 234, 237, 0.75)',
  dark: 'rgba(38, 101, 114, 0.75)',
  skills: 'background-color: rgba(0,0,0,.15)',
  title: 'rgb(13, 76, 89)',
}
