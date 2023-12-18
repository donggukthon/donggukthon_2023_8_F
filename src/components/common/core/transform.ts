import { system } from 'styled-system'
import { ResponsiveValue } from 'types/ResponsiveValue'

export type TransformProps = {
  transform?: ResponsiveValue<string | number>
}

export const transform = system({
  transform: true,
})
