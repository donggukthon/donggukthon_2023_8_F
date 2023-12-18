import { useState } from 'react'

export const useAccordionGroup = (defaultOpenedIndex = -1) => {
  const [expandedIndex, setExpandedIndex] = useState(defaultOpenedIndex)

  const toggleExpanded = (idx: number) => (expanded: boolean) => {
    if (!expanded) {
      initializeAccordions()
      return
    }

    setExpandedIndex(idx)
  }

  const initializeAccordions = () => {
    setExpandedIndex(-1)
  }

  return { expandedIndex, toggleExpanded, initializeAccordions }
}
