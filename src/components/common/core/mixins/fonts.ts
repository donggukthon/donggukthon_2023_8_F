import { css } from '@emotion/react'

const antiAliasing = css`
  --webkit-font-smoothing: 'antialiased';
  --moz-osx-font-smoothing: 'grayscale';
`

export const fontMixins = {
  ['display-38-bold']: (color: string) => css`
    color: ${color};
    font-weight: 700;
    font-size: 38px;
    line-height: 50px;
    ${antiAliasing}
  `,
  ['display-32-bold']: (color: string) => css`
    color: ${color};
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    ${antiAliasing}
  `,
  ['display-28-bold']: (color: string) => css`
    color: ${color};
    font-weight: 700;
    font-size: 28px;
    line-height: 40px;
    ${antiAliasing}
  `,
  ['display-24-bold']: (color: string) => css`
    color: ${color};
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    ${antiAliasing}
  `,
  ['display-22-bold']: (color: string) => css`
    color: ${color};
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    ${antiAliasing}
  `,
  ['display-38-semi-bold']: (color: string) => css`
    color: ${color};
    font-weight: 600;
    font-size: 38px;
    line-height: 50px;
    ${antiAliasing}
  `,
  ['display-28-semi-bold']: (color: string) => css`
    color: ${color};
    font-weight: 600;
    font-size: 28px;
    line-height: 40px;
    ${antiAliasing}
  `,
  ['heading-20-bold']: (color: string) => css`
    color: ${color};
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    ${antiAliasing}
  `,
  ['heading-18-bold']: (color: string) => css`
    color: ${color};
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    ${antiAliasing}
  `,
  ['heading-16-bold']: (color: string) => css`
    color: ${color};
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    ${antiAliasing}
  `,
  ['heading-15-bold']: (color: string) => css`
    color: ${color};
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    ${antiAliasing}
  `,
  ['heading-14-bold']: (color: string) => css`
    color: ${color};
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    ${antiAliasing}
  `,
  ['heading-13-bold']: (color: string) => css`
    color: ${color};
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    ${antiAliasing}
  `,
  ['heading-12-bold']: (color: string) => css`
    color: ${color};
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    ${antiAliasing}
  `,
  ['heading-24-semi-bold']: (color: string) => css`
    color: ${color};
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    ${antiAliasing}
  `,
  ['heading-20-semi-bold']: (color: string) => css`
    color: ${color};
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    ${antiAliasing}
  `,
  ['heading-18-semi-bold']: (color: string) => css`
    color: ${color};
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    ${antiAliasing}
  `,
  ['heading-16-semi-bold']: (color: string) => css`
    color: ${color};
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    ${antiAliasing}
  `,
  ['heading-15-semi-bold']: (color: string) => css`
    color: ${color};
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    ${antiAliasing}
  `,
  ['heading-14-semi-bold']: (color: string) => css`
    color: ${color};
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    ${antiAliasing}
  `,
  ['heading-13-semi-bold']: (color: string) => css`
    color: ${color};
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    ${antiAliasing}
  `,
  ['heading-12-semi-bold']: (color: string) => css`
    color: ${color};
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    ${antiAliasing}
  `,
  ['heading-20-medium']: (color: string) => css`
    color: ${color};
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  `,
  ['heading-18-medium']: (color: string) => css`
    color: ${color};
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
  `,
  ['heading-16-medium']: (color: string) => css`
    color: ${color};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  `,
  ['heading-16-medium-underline']: (color: string) => css`
    color: ${color};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: 'underline';
  `,
  ['heading-15-medium']: (color: string) => css`
    color: ${color};
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
  `,
  ['heading-14-medium']: (color: string) => css`
    color: ${color};
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  `,
  ['heading-14-medium-underline']: (color: string) => css`
    color: ${color};
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-decoration-line: 'underline';
  `,
  ['heading-13-medium']: (color: string) => css`
    color: ${color};
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
  `,
  ['heading-12-medium']: (color: string) => css`
    color: ${color};
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  `,

  ['heading-20-regular']: (color: string) => css`
    color: ${color};
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
  `,

  ['heading-18-regular']: (color: string) => css`
    color: ${color};
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
  `,
  ['heading-16-regular']: (color: string) => css`
    color: ${color};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  `,
  ['heading-15-regular']: (color: string) => css`
    color: ${color};
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
  `,
  ['heading-14-regular']: (color: string) => css`
    color: ${color};
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  `,
  ['heading-13-regular']: (color: string) => css`
    color: ${color};
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
  `,
  ['heading-12-regular']: (color: string) => css`
    color: ${color};
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  `,
  ['body-18-regular']: (color: string) => css`
    color: ${color};
    font-weight: 400;
    font-size: 18px;
    line-height: 34px;
    letter-spacing: 0.1px;
  `,
  ['body-16-regular']: (color: string) => css`
    color: ${color};
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.1px;
  `,
  ['body-15-regular']: (color: string) => css`
    color: ${color};
    font-weight: 400;
    font-size: 15px;
    line-height: 26px;
    letter-spacing: 0.1px;
  `,
  ['body-14-regular']: (color: string) => css`
    color: ${color};
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
  `,
  ['btn-18-bold']: (color: string) => css`
    color: ${color};
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 18px;
    ${antiAliasing}
  `,

  ['btn-16-bold']: (color: string) => css`
    color: ${color};
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 16px;
    ${antiAliasing}
  `,

  ['btn-14-bold']: (color: string) => css`
    color: ${color};
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 14px;
    ${antiAliasing}
  `,

  ['btn-16-medium']: (color: string) => css`
    color: ${color};
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 16px;
  `,

  ['btn-14-medium']: (color: string) => css`
    color: ${color};
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 14px;
  `,

  ['btn-14-regular']: (color: string) => css`
    color: ${color};
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 14px;
  `,

  ['btn-16-regular']: (color: string) => css`
    color: ${color};
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 16px;
  `,

  ['btn-12-medium']: (color: string) => css`
    color: ${color};
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 12px;
  `,

  ['btn-12-regular']: (color: string) => css`
    color: ${color};
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 12px;
  `,

  ['btn-12-bold']: (color: string) => css`
    color: ${color};
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 12px;
    ${antiAliasing}
  `,
}
