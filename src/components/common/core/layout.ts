import { system, compose, layout as systemLayout, LayoutProps as SystemLayoutProps } from 'styled-system'
import { ResponsiveValue } from 'types/ResponsiveValue'

export type CustomLayoutProps = {
  hideScroll?: ResponsiveValue<Boolean>
}

export type LayoutProps = SystemLayoutProps & CustomLayoutProps

export const customLayout = system({
  hideScroll: (value: boolean) =>
    value
      ? {
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }
      : {},
})

export const layout = compose(systemLayout, customLayout)
