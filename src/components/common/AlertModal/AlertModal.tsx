import { FC, Fragment, ReactElement } from 'react'
import { Modal, ModalProps } from '../Modal'
import { Space } from '../Space'
import { Box } from '../Box'
import styled from '@emotion/styled'
import { Font } from '../Font/Font'
import ThickCloseIcon from '../svgs/ThickCloseIcon'

type AlertModalProps = Omit<ModalProps, 'renderContent'> & {
  className?: string
  title: string | string[]
  description?: string
  showCloseButton?: boolean
  renderButton: (_: { closeModal: () => void }) => ReactElement
}

export const AlertModal: FC<AlertModalProps> = ({
  className,
  title: titleProp,
  description,
  showCloseButton = true,
  renderButton,
  ...baseModalProps
}) => {
  const title = Array.isArray(titleProp) ? titleProp : [titleProp]

  return (
    <Modal
      className={className}
      {...baseModalProps}
      renderContent={({ closeModal }) => (
        <Box position="relative" width="100%" display="flex" flexDirection="column" p={28}>
          {showCloseButton && <CloseIcon className="desktop" onClick={closeModal} />}
          <Box as="header" pr={showCloseButton ? [0, 20] : 0}>
            <Font type={['heading-18-bold', 'heading-20-bold']} color="gray.950">
              {title.map((t, index) => (
                <Fragment key={index}>
                  {t}
                  <br />
                </Fragment>
              ))}
            </Font>
            {description && (
              <>
                <Space height={12} />
                <Font type="heading-15-medium" color="gray.750">
                  {description}
                </Font>
              </>
            )}
          </Box>
          <Space height={32} />
          {renderButton({ closeModal })}
        </Box>
      )}
    />
  )
}

const CloseIcon = styled(ThickCloseIcon)`
  position: absolute;
  top: 28px;
  right: 28px;
  cursor: pointer;
`
