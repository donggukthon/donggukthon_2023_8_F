export const antiAliasing = {
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
}

export const fontWeightVariants = {
  bold: 700,
  semiBold: 600,
  medium: 500,
  regular: 400,
}

const fontVariants = {
  ['display-56-bold']: {
    fontWeight: fontWeightVariants.bold,
    fontSize: 56,
    lineHeight: '70px',
    ...antiAliasing,
  },
  ['display-50-bold']: {
    fontWeight: fontWeightVariants.bold,
    fontSize: 50,
    lineHeight: '66px',
    ...antiAliasing,
  },
  ['display-44-bold']: {
    fontWeight: fontWeightVariants.bold,
    fontSize: 44,
    lineHeight: '60px',
    ...antiAliasing,
  },
  ['display-40-bold']: {
    fontWeight: fontWeightVariants.bold,
    fontSize: 40,
    lineHeight: '58px',
    ...antiAliasing,
  },
  ['display-38-bold']: {
    fontWeight: fontWeightVariants.bold,
    fontSize: 38,
    lineHeight: '50px',
    ...antiAliasing,
  },
  ['display-32-bold']: {
    fontWeight: fontWeightVariants.bold,
    fontSize: 32,
    lineHeight: '42px',
    ...antiAliasing,
  },
  ['display-28-bold']: {
    fontWeight: fontWeightVariants.bold,
    fontSize: 28,
    lineHeight: '40px',
    ...antiAliasing,
  },
  ['display-24-bold']: {
    fontWeight: fontWeightVariants.bold,
    fontSize: 24,
    lineHeight: '34px',
    ...antiAliasing,
  },
  ['display-22-bold']: {
    fontWeight: fontWeightVariants.bold,
    fontSize: 22,
    lineHeight: '32px',
    ...antiAliasing,
  },
  ['display-22-semi-bold']: {
    fontWeight: fontWeightVariants.semiBold,
    fontSize: 22,
    lineHeight: '32px',
    ...antiAliasing,
  },
  ['display-38-semi-bold']: {
    fontWeight: fontWeightVariants.semiBold,
    fontSize: 38,
    lineHeight: '50px',
    ...antiAliasing,
  },
  ['display-28-semi-bold']: {
    fontWeight: fontWeightVariants.semiBold,
    fontSize: 28,
    lineHeight: '40px',
    ...antiAliasing,
  },
  ['display-24-semi-bold']: {
    fontWeight: fontWeightVariants.semiBold,
    fontSize: 24,
    lineHeight: '34px',
    ...antiAliasing,
  },
  ['heading-20-bold']: {
    fontWeight: fontWeightVariants.bold,
    fontSize: 20,
    lineHeight: '28px',
    ...antiAliasing,
  },
  ['heading-18-bold']: {
    fontWeight: fontWeightVariants.bold,
    fontSize: 18,
    lineHeight: '26px',
    ...antiAliasing,
  },
  ['heading-16-bold']: {
    fontWeight: fontWeightVariants.bold,
    fontSize: 16,
    lineHeight: '24px',
    ...antiAliasing,
  },
  ['heading-15-bold']: {
    fontWeight: fontWeightVariants.bold,
    fontSize: 15,
    lineHeight: '22px',
    ...antiAliasing,
  },
  ['heading-14-bold']: {
    fontWeight: fontWeightVariants.bold,
    fontSize: 14,
    lineHeight: '20px',
    ...antiAliasing,
  },
  ['heading-13-bold']: {
    fontWeight: fontWeightVariants.bold,
    fontSize: 13,
    lineHeight: '18px',
    ...antiAliasing,
  },
  ['heading-12-bold']: {
    fontWeight: fontWeightVariants.bold,
    fontSize: 12,
    lineHeight: '16px',
    ...antiAliasing,
  },
  ['heading-10-bold']: {
    fontWeight: fontWeightVariants.bold,
    fontSize: 10,
    lineHeight: '16px',
    ...antiAliasing,
  },
  ['heading-24-semi-bold']: {
    fontWeight: fontWeightVariants.semiBold,
    fontSize: 24,
    lineHeight: '34px',
    ...antiAliasing,
  },
  ['heading-20-semi-bold']: {
    fontWeight: fontWeightVariants.semiBold,
    fontSize: 20,
    lineHeight: '28px',
    ...antiAliasing,
  },
  ['heading-18-semi-bold']: {
    fontWeight: fontWeightVariants.semiBold,
    fontSize: 18,
    lineHeight: '26px',
    ...antiAliasing,
  },
  ['heading-16-semi-bold']: {
    fontWeight: fontWeightVariants.semiBold,
    fontSize: 16,
    lineHeight: '24px',
    ...antiAliasing,
  },
  ['heading-15-semi-bold']: {
    fontWeight: fontWeightVariants.semiBold,
    fontSize: 15,
    lineHeight: '22px',
    ...antiAliasing,
  },
  ['heading-14-semi-bold']: {
    fontWeight: fontWeightVariants.semiBold,
    fontSize: 14,
    lineHeight: '20px',
    ...antiAliasing,
  },
  ['heading-13-semi-bold']: {
    fontWeight: fontWeightVariants.semiBold,
    fontSize: 13,
    lineHeight: '18px',
    ...antiAliasing,
  },
  ['heading-12-semi-bold']: {
    fontWeight: fontWeightVariants.semiBold,
    fontSize: 12,
    lineHeight: '16px',
    ...antiAliasing,
  },
  ['heading-20-medium']: {
    fontWeight: fontWeightVariants.medium,
    fontSize: 20,
    lineHeight: '28px',
  },
  ['heading-18-medium']: {
    fontWeight: fontWeightVariants.medium,
    fontSize: 18,
    lineHeight: '26px',
  },
  ['heading-16-medium']: {
    fontWeight: fontWeightVariants.medium,
    fontSize: 16,
    lineHeight: '24px',
  },
  ['heading-16-medium-underline']: {
    fontWeight: fontWeightVariants.medium,
    fontSize: 16,
    lineHeight: '24px',
    textDecorationLine: 'underline',
  },
  ['heading-15-medium']: {
    fontWeight: fontWeightVariants.medium,
    fontSize: 15,
    lineHeight: '22px',
  },
  ['heading-14-medium']: {
    fontWeight: fontWeightVariants.medium,
    fontSize: 14,
    lineHeight: '20px',
  },
  ['heading-14-medium-underline']: {
    fontWeight: fontWeightVariants.medium,
    fontSize: 14,
    lineHeight: '20px',
    textDecorationLine: 'underline',
  },
  ['heading-13-medium']: {
    fontWeight: fontWeightVariants.medium,
    fontSize: 13,
    lineHeight: '18px',
  },
  ['heading-12-medium']: {
    fontWeight: fontWeightVariants.medium,
    fontSize: 12,
    lineHeight: '16px',
  },

  ['heading-20-regular']: {
    fontWeight: fontWeightVariants.regular,
    fontSize: 20,
    lineHeight: '28px',
  },

  ['heading-18-regular']: {
    fontWeight: fontWeightVariants.regular,
    fontSize: 18,
    lineHeight: '26px',
  },
  ['heading-16-regular']: {
    fontWeight: fontWeightVariants.regular,
    fontSize: 16,
    lineHeight: '24px',
  },
  ['heading-15-regular']: {
    fontWeight: fontWeightVariants.regular,
    fontSize: 15,
    lineHeight: '22px',
  },
  ['heading-14-regular']: {
    fontWeight: fontWeightVariants.regular,
    fontSize: 14,
    lineHeight: '20px',
  },
  ['heading-13-regular']: {
    fontWeight: fontWeightVariants.regular,
    fontSize: 13,
    lineHeight: '18px',
  },
  ['heading-12-regular']: {
    fontWeight: fontWeightVariants.regular,
    fontSize: 12,
    lineHeight: '16px',
  },
  ['body-22-medium']: {
    fontWeight: fontWeightVariants.medium,
    fontSize: 22,
    lineHeight: '36px',
    letterSpacing: '-0.1px',
  },
  ['body-20-medium']: {
    fontWeight: fontWeightVariants.medium,
    fontSize: 20,
    lineHeight: '34px',
    letterSpacing: '-0.1px',
  },
  ['body-18-medium']: {
    fontWeight: fontWeightVariants.medium,
    fontSize: 18,
    lineHeight: '30px',
    letterSpacing: '-0.1px',
  },
  ['body-18-regular']: {
    fontWeight: fontWeightVariants.regular,
    fontSize: 18,
    lineHeight: '34px',
    letterSpacing: '-0.1px',
  },
  ['body-16-regular']: {
    fontWeight: fontWeightVariants.regular,
    fontSize: 16,
    lineHeight: '28px',
    letterSpacing: '-0.1px',
  },
  ['body-15-regular']: {
    fontWeight: fontWeightVariants.regular,
    fontSize: 15,
    lineHeight: '26px',
    letterSpacing: '-0.1px',
  },
  ['body-14-regular']: {
    fontWeight: fontWeightVariants.regular,
    fontSize: 14,
    lineHeight: '24px',
    letterSpacing: '-0.1px',
  },
  ['body-10-regular']: {
    fontWeight: fontWeightVariants.regular,
    fontSize: 10,
    lineHeight: '17px',
    letterSpacing: '-0.1px',
  },
  ['btn-18-bold']: {
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '18px',
    ...antiAliasing,
  },

  ['btn-16-bold']: {
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '16px',
    ...antiAliasing,
  },

  ['btn-14-bold']: {
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '14px',
    ...antiAliasing,
  },

  ['btn-16-medium']: {
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: '16px',
  },

  ['btn-14-medium']: {
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: '14px',
  },

  ['btn-14-regular']: {
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: '14px',
  },

  ['btn-16-regular']: {
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: '16px',
  },

  ['btn-12-medium']: {
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: '12px',
  },

  ['btn-12-regular']: {
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: '12px',
  },

  ['btn-12-bold']: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '12px',
    ...antiAliasing,
  },
}

export default fontVariants
