import { css } from '@emotion/react'

export const typography = {
  h1: css`
    font-size: 20px;
    font-weight: 600;
    font-family: 'Suit';
    letter-spacing: normal;
  `,
  h2: css`
    font-size: 18px;
    font-weight: 600;
    font-family: 'Suit';
    letter-spacing: normal;
  `,
  h3: css`
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
    font-family: 'Suit';
    letter-spacing: normal;
  `,
  h4: css`
    font-size: 12px;
    font-weight: 600;
    font-family: 'Suit';
    letter-spacing: normal;
  `,
  body: {
    XL: css`
      font-size: 16px;
      font-weight: 400;
    `,
    L: css`
      font-size: 14px;
      line-height: 14px;
      font-weight: 400;
    `,
    R: css`
      font-size: 12px;
      font-weight: 400;
    `,
    S: css`
      font-size: 10px;
      font-weight: 400;
    `,
  },
}
