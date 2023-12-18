import { CSSProperties, FocusEventHandler, MouseEventHandler, PointerEventHandler, TouchEventHandler } from 'react'
import { system } from 'styled-system'
import { ResponsiveValue } from 'types/ResponsiveValue'

export type ActionProps = {
  pointerEvents?: ResponsiveValue<CSSProperties['pointerEvents']>
  onBlur?: FocusEventHandler<HTMLElement>
  onClick?: MouseEventHandler<HTMLElement>
  onContextMenu?: MouseEventHandler<HTMLElement>
  onDoubleClick?: MouseEventHandler<HTMLElement>
  onFocus?: FocusEventHandler<HTMLElement>
  onMouseDown?: MouseEventHandler<HTMLElement>
  onMouseEnter?: MouseEventHandler<HTMLElement>
  onMouseLeave?: MouseEventHandler<HTMLElement>
  onMouseMove?: MouseEventHandler<HTMLElement>
  onMouseOut?: MouseEventHandler<HTMLElement>
  onMouseOver?: MouseEventHandler<HTMLElement>
  onMouseUp?: MouseEventHandler<HTMLElement>
  onPointerCancel?: PointerEventHandler<HTMLElement>
  onPointerDown?: PointerEventHandler<HTMLElement>
  onPointerEnter?: PointerEventHandler<HTMLElement>
  onPointerLeave?: PointerEventHandler<HTMLElement>
  onPointerMove?: PointerEventHandler<HTMLElement>
  onPointerOut?: PointerEventHandler<HTMLElement>
  onPointerOver?: PointerEventHandler<HTMLElement>
  onPointerUp?: PointerEventHandler<HTMLElement>
  onTouchCancel?: TouchEventHandler<HTMLElement>
  onTouchEnd?: TouchEventHandler<HTMLElement>
  onTouchMove?: TouchEventHandler<HTMLElement>
  onTouchStart?: TouchEventHandler<HTMLElement>
}

export const action = system({
  pointerEvents: true,
})
