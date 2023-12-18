import { getPaddedResponsiveArray } from '@utils/getPaddedResponsiveArray'
import React, { Children, FC, ReactElement } from 'react'
import { ResponsiveValue } from 'types/ResponsiveValue'
import { Box } from '../Box'

type GridListProps = {
  className?: string
  row: ResponsiveValue<number>
  column: ResponsiveValue<number>
  rowGap?: ResponsiveValue<number>
  columnGap?: ResponsiveValue<number>
  children?: React.ReactNode
}

export const GridList: FC<GridListProps> = ({ className, children, row = 1, column, columnGap = 0, rowGap = 0 }) => {
  const childrenArray = Children.toArray(children)
  const responsiveRow = getPaddedResponsiveArray(row)
  const responsiveColumn = getPaddedResponsiveArray(column)
  const responsiveRowGap = getPaddedResponsiveArray(rowGap)
  const responsiveColumnGap = getPaddedResponsiveArray(columnGap)
  const responsiveFlex = responsiveColumn.map(
    (columnValue, index) => `0 1 calc((100% - ${responsiveColumnGap[index] * (columnValue - 1)}px) / ${columnValue})`
  )

  const responsiveDisplay = (rowIndex: number) =>
    responsiveColumn.map((columnValue, index) => (rowIndex < columnValue * responsiveRow[index] ? 'flex' : 'none'))
  const responsiveMarginTop = (rowIndex: number) =>
    responsiveColumn.map((columnValue, index) =>
      rowIndex >= columnValue ? responsiveRowGap?.[index] ?? responsiveColumnGap[index] : 0
    )
  const responsiveMarginLeft = (rowIndex: number) =>
    responsiveColumn.map((columnValue, index) => (rowIndex % columnValue !== 0 ? responsiveColumnGap[index] : 0))

  return (
    <Box as="ul" className={className} width="100%" display="flex" flexWrap="wrap">
      {childrenArray.map((child, childIndex) => (
        <Box
          as="li"
          key={(child as ReactElement).key ?? childIndex}
          flex={responsiveFlex}
          mt={responsiveMarginTop(childIndex)}
          ml={responsiveMarginLeft(childIndex)}
          display={responsiveDisplay(childIndex)}
        >
          {child}
        </Box>
      ))}
    </Box>
  )
}
