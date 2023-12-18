import styled from '@emotion/styled'
import { Box } from '../Box'
import { ReactElement } from 'react'
import { useLazyUnmount } from '@hooks/useLazyUnmount'
import { useControlledState } from '@hooks/useControlledState'
import { ResponsiveValue } from 'types/ResponsiveValue'
import { ColorThemeKeys } from '../core/colors'

const ANIMATION_DURATION = 100

type PlacementType =
  | 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top'

type TooltipProps = {
  className?: string
  placement: PlacementType
  bg: ResponsiveValue<ColorThemeKeys>
  opened?: boolean
  defaultOpend?: boolean
  renderOpener: (_: { openModal: () => void }) => ReactElement
  renderContent: (_: { closeModal: () => void }) => ReactElement
}

const tooltipStyle = {
  'top-start': {
    tooltipPosition: { bottom: 'calc(100% + 8px)', left: 0 },
    arrowPosition: { top: '100%', right: '50%' },
  },
  top: {
    tooltipPosition: { bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' },
    arrowPosition: { top: '100%', left: '50%', transform: 'translateX(-50%)' },
  },
  'top-end': {
    tooltipPosition: { bottom: 'calc(100% + 8px)', right: 0 },
    arrowPosition: { top: '100%', left: '50%' },
  },
  'right-start': {
    tooltipPosition: { top: 0, left: 'calc(100% + 8px)' },
    arrowPosition: { right: '100%', bottom: '50%' },
  },
  right: {
    tooltipPosition: { top: '50%', left: 'calc(100% + 8px)', transform: 'translateY(-50%)' },
    arrowPosition: { right: '100%', top: '50%', transform: 'translateY(-50%)' },
  },
  'right-end': {
    tooltipPosition: { bottom: 0, left: 'calc(100% + 8px)' },
    arrowPosition: { right: '100%', top: '50%' },
  },
  'bottom-start': {
    tooltipPosition: { top: 'calc(100% + 8px)', left: 0 },
    arrowPosition: { bottom: '100%', right: '50%' },
  },
  bottom: {
    tooltipPosition: { top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' },
    arrowPosition: { bottom: '100%', left: '50%', transform: 'translateX(-50%)' },
  },
  'bottom-end': {
    tooltipPosition: { top: 'calc(100% + 8px)', right: 0 },
    arrowPosition: { bottom: '100%', left: '50%' },
  },
  'left-start': {
    tooltipPosition: { top: 0, right: 'calc(100% + 8px)' },
    arrowPosition: { left: '100%', bottom: '50%' },
  },
  left: {
    tooltipPosition: { top: '50%', right: 'calc(100% + 8px)', transform: 'translateY(-50%)' },
    arrowPosition: { left: '100%', top: '50%', transform: 'translateY(-50%)' },
  },
  'left-end': {
    tooltipPosition: { bottom: 0, right: 'calc(100% + 8px)' },
    arrowPosition: { left: '100%', top: '50%' },
  },
}

export const Tooltip = styled(
  ({
    className,
    placement,
    bg,
    opened: openedProp,
    defaultOpend = false,
    renderContent,
    renderOpener,
    ...props
  }: TooltipProps) => {
    const { tooltipPosition, arrowPosition } = tooltipStyle[placement]
    const [opened, setOpenedIfUncontrolled] = useControlledState({ controlled: openedProp, default: defaultOpend })
    const isMounted = useLazyUnmount(opened, ANIMATION_DURATION)

    const open = () => setOpenedIfUncontrolled(true)
    const close = () => setOpenedIfUncontrolled(false)

    return (
      <Box onMouseOver={open} onMouseLeave={close} position="relative" display="inline-flex">
        {renderOpener({ openModal: () => setOpenedIfUncontrolled(true) })}
        {isMounted && (
          <Box
            className={className}
            p={12}
            backgroundColor={bg}
            color="white"
            borderRadius={4}
            position="absolute"
            zIndex={1}
            style={tooltipPosition}
            {...props}
          >
            {placement.includes('top') && <BottomArrow position="absolute" style={arrowPosition} borderColor={bg} />}
            {placement.includes('bottom') && <TopArrow position="absolute" style={arrowPosition} borderColor={bg} />}
            {placement.includes('left') && <RightArrow position="absolute" style={arrowPosition} borderColor={bg} />}
            {placement.includes('right') && <LeftArrow position="absolute" style={arrowPosition} borderColor={bg} />}
            <Box width="max-content">{renderContent({ closeModal: close })}</Box>
          </Box>
        )}
      </Box>
    )
  }
)<TooltipProps>()

const TopArrow = styled(Box)`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid black;
`

const BottomArrow = styled(Box)`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
`

const LeftArrow = styled(Box)`
  width: 0;
  height: 0;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  border-right: 5px solid black;
`

const RightArrow = styled(Box)`
  width: 0;
  height: 0;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  border-left: 5px solid black;
`
