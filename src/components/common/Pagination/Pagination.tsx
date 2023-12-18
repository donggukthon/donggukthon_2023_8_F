import { FC, useMemo } from 'react'
import styles from './style.module.scss'
import cx from 'classnames'
import { range } from 'lodash'
import PaginationArrowIcon from '../svgs/PaginationArrowIcon'

type PaginationProps = {
  className?: string
  totalPage: number
  currentIndex: number
  pageSize?: number
  onChange?: (_pageNumber: number) => void
}

export const Pagination: FC<PaginationProps> = ({ className, totalPage, currentIndex, pageSize = 5, onChange }) => {
  const movePage = (pageNumber: number) => () => {
    onChange?.(pageNumber)
  }
  const moveToNextPage = movePage(currentIndex + 1)
  const moveToPrevPage = movePage(currentIndex - 1)

  const [isFirstPage, isLastPage] = [currentIndex === 0, currentIndex === totalPage - 1]

  const pages = useMemo(() => {
    const oddPageSize = pageSize % 2 === 0 ? pageSize - 1 : pageSize
    const endIndex = totalPage - 1

    return range(currentIndex - Math.floor(oddPageSize / 2), currentIndex + Math.floor(oddPageSize / 2) + 1)
      .map((item, _, items) => item + (items[0] < 0 ? -items[0] : 0))
      .map((item, _, items) => item + (items[oddPageSize - 1] > endIndex ? endIndex - items[oddPageSize - 1] : 0))
      .filter((item) => item <= endIndex && item >= 0)
  }, [currentIndex, totalPage, pageSize])

  return (
    <div className={cx(className, styles['pagination'])}>
      <div className={cx(styles.arrow, styles.left, { [styles.disable]: isFirstPage })} onClick={moveToPrevPage}>
        <PaginationArrowIcon width={12} />
      </div>
      <ul className={styles['page-number-container']}>
        {pages.map((pageNumber) => (
          <li
            key={pageNumber}
            className={cx(styles['page-number'], { [styles.active]: currentIndex === pageNumber })}
            onClick={movePage(pageNumber)}
          >
            {pageNumber + 1}
          </li>
        ))}
      </ul>
      <div className={cx(styles.arrow, styles.right, { [styles.disable]: isLastPage })} onClick={moveToNextPage}>
        <PaginationArrowIcon width={12} />
      </div>
    </div>
  )
}
