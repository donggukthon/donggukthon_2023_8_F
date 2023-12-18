import { ResponsiveValue } from 'types/ResponsiveValue'

export function getPropVariant<VariantValue extends Record<string, any>>(
  prop: ResponsiveValue<string | number | boolean>,
  variants: Record<string, VariantValue>
) {
  if (Array.isArray(prop)) {
    const variantValue = prop.reduce((prev, key, index) => {
      const value = variants[`${key}`]
      for (const key in value) {
        if (prev[key] === undefined) {
          prev[key] = new Array(index).fill(undefined)
        }
        prev[key].push(value[key])
      }
      return prev
    }, {} as any)

    return variantValue as { [key in keyof VariantValue]: VariantValue[key][] }
  }

  return variants[`${prop}`] as VariantValue
}
