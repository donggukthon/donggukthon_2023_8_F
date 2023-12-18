import { ComponentType, FC, Fragment, ReactElement, SVGProps } from 'react'
import { Modal, ModalProps } from '../Modal'
import { Font } from '../Font'
import { Space } from '../Space'
import { Box } from '../Box'
import styled from '@emotion/styled'
import { useContentOverflow } from '@hooks/useContentOverflow'
import ThickCloseIcon from '../svgs/ThickCloseIcon'

type ContextModalProps = ModalProps & {
  className?: string
  title: string
  description?: string
  showCloseButton?: boolean
  renderButton: (_: { closeModal: () => void }) => ReactElement
  IconComponent?: ComponentType<SVGProps<SVGSVGElement>>
}

export const ContextModal: FC<ContextModalProps> = ({
  className,
  title,
  description: descriptionProp,
  renderContent,
  renderButton,
  showCloseButton = true,
  IconComponent,
  ...baseModalProps
}) => {
  const { setRef, isOverflown } = useContentOverflow<HTMLDivElement>()
  const description = Array.isArray(descriptionProp) ? descriptionProp : [descriptionProp]

  return (
    <Modal
      className={className}
      {...baseModalProps}
      renderContent={({ closeModal }) => (
        <Box position="relative" width="100%" display="flex" flexDirection="column" p={28}>
          {showCloseButton && <CloseIcon className="desktop" onClick={closeModal} />}
          {IconComponent && (
            <>
              <Box size={40}>
                <IconComponent width="100%" height="100%" />
              </Box>
              <Space height={28} />
            </>
          )}
          <Box as="header" pr={showCloseButton ? [0, 20] : 0}>
            <Font type={['heading-18-bold', 'heading-20-bold']} color="gray.950" whiteSpace={'pre-line'}>
              {title}
            </Font>
            {description && (
              <>
                <Space height={12} />
                <Font type="heading-15-medium" color="gray.750" whiteSpace={'pre-line'}>
                  {description}
                </Font>
              </>
            )}
          </Box>
          <Space height={28} />
          <ScrollBox ref={setRef} position="relative" overflowY="auto" pb={isOverflown ? 60 : 0}>
            {renderContent({ closeModal })}
            {isOverflown && <BottomShadowBox />}
          </ScrollBox>
          <Space height={32} />
          {renderButton({ closeModal })}
        </Box>
      )}
    />
  )
}

const ScrollBox = styled(Box)`
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`

const BottomShadowBox = styled(Box)`
  position: fixed;
  height: 60px;
  left: 0;
  right: 0;
  bottom: 103px;
  /* background: linear-gradient(0deg, #ffffff 33.3%, rgba(255, 255, 255, 0.5) 66.6%, rgba(255, 255, 255, 0) 100%); */
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%); ;
`

const CloseIcon = styled(ThickCloseIcon)`
  position: absolute;
  top: 28px;
  right: 28px;
  cursor: pointer;
`
