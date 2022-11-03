import uniqid from 'uniqid'
import { useSelector, useDispatch } from 'react-redux'
import { setFilters } from '@/redux/heroSlice'
import { Filters } from '@/types'
import type { RootState } from '@/redux/store'
import './DesktopFilter.scss'
import classNames from 'classnames'

export default function DesktopFilter() {
  const filters = useSelector((state: RootState) => state.hero.filters)
  const dispatch = useDispatch()

  function selectTag(index: number) {
    const newFiltersArray: Array<Filters> = [...filters]
    newFiltersArray[index] = {
      ...newFiltersArray[index],
      checked: !newFiltersArray[index].checked,
    }

    dispatch(setFilters([...newFiltersArray]))
  }

  return (
    <div className="desktopFilter">
      <div className="desktopFilter__box">
        {filters.map((filter, index) => (
          <div
            className={classNames('desktopFilter__box__tag', {
              'desktopFilter__box__tag--active': filter.checked,
            })}
            key={uniqid('desktopFilter__box__tag__')}
            onClick={() => selectTag(index)}
          >
            {filter.tag}
          </div>
        ))}
      </div>
    </div>
  )
}
