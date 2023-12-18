export type ConversionType = '콘텐츠 구매'

export type ConversionPropertyType = {
  label: string // for GA
  category: string // for GA
  value?: string | number // for GA
}

export type ConversionParamType = {
  name: ConversionType
  properties: ConversionPropertyType
}
