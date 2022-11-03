import { useState, useEffect } from 'react'
import uniqid from 'uniqid'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import { setFilters } from '@/redux/heroSlice'
import { Filters } from '@/types'
import SvgCollection from '@/assets/svg-collection.svg'
import type { RootState } from '@/redux/store'
import useMenu from '@/hooks/useMenu'
import './MobileFilter.scss'

export default function MobileFilter() {
  const filters = useSelector((state: RootState) => state.hero.filters)
  const dispatch = useDispatch()

  const [filterActive, setFilterActive] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  function resetFilters() {
    let newFiltersArray: Array<Filters> = []

    filters.forEach((filter: Filters) => {
      newFiltersArray = [
        ...newFiltersArray,
        {
          tag: filter.tag,
          checked: false,
        },
      ]
    })

    dispatch(setFilters([...newFiltersArray]))
  }

  function selectTag(index: number) {
    const newFiltersArray: Array<Filters> = [...filters]
    newFiltersArray[index] = {
      ...newFiltersArray[index],
      checked: !newFiltersArray[index].checked,
    }

    dispatch(setFilters([...newFiltersArray]))
  }

  function checkFilters(array: Array<Filters>) {
    for (let i = 0; i in filters; i++) {
      if (array[i].checked) {
        setFilterActive(true)
        break
      } else {
        setFilterActive(false)
      }
    }
  }

  useEffect(() => {
    checkFilters(filters)
  }, [filters])

  useMenu('mobileFilter', setShowMenu)

  return (
    <div className="mobileFilter">
      <div className="mobileFilter__dropdown">
        <div
          className={classNames('mobileFilter__dropdown__box', {
            ['mobileFilter__dropdown__box--active']: filterActive,
          })}
          onClick={() => {
            setShowMenu((prevState) => !prevState)
          }}
        >
          <span>
            {filterActive ? '- Filters Applied -' : '- Select Filters -'}
          </span>
          <svg fill="currentColor">
            <use href={`${SvgCollection}#caret-sort`} />
          </svg>
        </div>
        <div
          className={classNames('mobileFilter__dropdown__menu', {
            ['mobileFilter__dropdown__menu--hidden']: !showMenu,
          })}
        >
          {filters.map((filter: Filters, index: number) => (
            <div
              className={classNames('mobileFilter__dropdown__menu__item', {
                ['mobileFilter__dropdown__menu__item--checked']: filter.checked,
              })}
              key={uniqid('mobileFilter__dropdown__menu__item')}
              onClick={() => {
                selectTag(index)
              }}
            >
              <div className="mobileFilter__dropdown__menu__item__checkbox" />
              <span className="mobileFilter__dropdown__menu__item__text">
                {filter.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
      {filterActive && (
        <button className="mobileFilter__resetButton" onClick={resetFilters}>
          Reset
        </button>
      )}
    </div>
  )
}
