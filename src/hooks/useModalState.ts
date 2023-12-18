import { useCallback, useState } from 'react'

export type UseModalStateResult = {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
  toggleModal: () => void
}

export type UseModalStateProps = {
  defaultValue?: boolean
  modalViewEvent?: string
}

export const useModalState = (props: UseModalStateProps = {}): UseModalStateResult => {
  const [isModalOpen, setIsModalOpen] = useState(props?.defaultValue ?? false)

  const openModal = useCallback(() => setIsModalOpen(true), [])
  const closeModal = useCallback(() => setIsModalOpen(false), [])
  const toggleModal = useCallback(() => setIsModalOpen(!isModalOpen), [isModalOpen])

  return {
    isModalOpen,
    openModal,
    closeModal,
    toggleModal,
  }
}
