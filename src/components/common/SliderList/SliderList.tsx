import { Children, forwardRef, isValidElement, PropsWithChildren } from 'react'
import Flicking from '@egjs/react-flicking'
import { Box } from '../Box'
import { ResponsiveValue } from 'types/ResponsiveValue'
import { getPaddedResponsiveArray } from '@utils/getPaddedResponsiveArray'
import { ForwardStyle } from '../ForwardStyle'
import styled from '@emotion/styled'

type SliderListProps = {
  className?: string
  spacing?: ResponsiveValue<number>
  panelsPerView?: ResponsiveValue<number>
  align?: 'prev' | 'center'
  moveType?: 'snap' | 'strict' | 'freeScroll'
  offsetX?: ResponsiveValue<number>
}

export const SliderList = forwardRef<Flicking, PropsWithChildren<SliderListProps>>(
  ({ className, children, spacing = 0, panelsPerView = 1, align = 'prev', moveType = 'snap', offsetX = [] }, ref) => {
    const paddedOffsetX = getPaddedResponsiveArray(offsetX)
    const paddedSpacing = getPaddedResponsiveArray(spacing)
    const paddedPanelsPerView = getPaddedResponsiveArray(panelsPerView)

    const offsetPaddingX = paddedOffsetX
    const offsetMarginX = paddedOffsetX.map((value) => value * -1)
    const panelWidth = paddedPanelsPerView.map((value, index) =>
      value === 1 ? '100%' : `calc(${spacing ? `(100% - ${paddedSpacing[index] * (value - 1)}px)` : '100%'} / ${value})`
    )

    return (
      <Container className={className}>
        <ForwardStyle mx={offsetMarginX} px={offsetPaddingX}>
          <Flicking
            ref={ref}
            inputType={['touch', 'pointer', 'mouse']}
            align={align}
            moveType={moveType}
            noPanelStyleOverride={true}
            autoResize={true}
            bound={true}
            interruptable={true}
            preventClickOnDrag={true}
          >
            {Children.toArray(children).map(
              (child, index) =>
                isValidElement(child) && (
                  <Box key={index} width={panelWidth} {...(index > 0 && { ml: spacing })}>
                    {child}
                  </Box>
                )
            )}
          </Flicking>
        </ForwardStyle>
      </Container>
    )
  }
)

const Container = styled(Box)`
  & > .flicking-viewport {
    width: auto;
    position: relative;
    overflow: hidden;
  }

  .flicking-camera {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: row;
  }
  .flicking-camera > * {
    flex-shrink: 0;
  }

  .flicking-viewport.vertical {
    display: inline-flex;
  }
  .flicking-viewport.vertical > .flicking-camera {
    display: inline-flex;
    flex-direction: column;
  }

  .flicking-viewport.flicking-hidden .flicking-camera > * {
    visibility: hidden;
  }
`
