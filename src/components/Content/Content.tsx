import { useEffect } from 'react'
import uniqid from 'uniqid'
import type { RootState } from '@/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from '@/components'
import { setCards } from '@/redux/heroSlice'
import { Cards, Filters } from '@/types'
import './Content.scss'

type Props = {
  isMobile: boolean
}

export default function Content({ isMobile }: Props) {
  const dispatch = useDispatch()

  const baseCollection: Array<Cards> = useSelector(
    (state: RootState) => state.hero.baseCollection
  )
  const cards: Array<Cards> = useSelector(
    (state: RootState) => state.hero.cards
  )
  const filters: Array<Filters> = useSelector(
    (state: RootState) => state.hero.filters
  )

  function getFrontTitle(title: string) {
    const twoDotsPosition = title.indexOf(':')

    if (twoDotsPosition !== -1) {
      return title.slice(twoDotsPosition + 1, title.length)
    }

    return title
  }

  function getBackTitle(title: string) {
    const twoDotsPosition = title.indexOf(':')

    if (twoDotsPosition !== -1) {
      return title.slice(0, twoDotsPosition)
    }

    return title.slice(0, 12) + '...'
  }

  useEffect(() => {
    const newCardsArray = baseCollection.filter((card) => {
      const cardTags = card.tags
      const activeFiltersObj = filters.filter((filter) => filter.checked)
      const activeFilters: string[] = []

      activeFiltersObj.forEach((filter) => {
        activeFilters.push(filter.tag)
      })

      const validationArray: number[] = []
      activeFilters.forEach((tag) => {
        validationArray.push(cardTags.indexOf(tag))
      })

      if (!validationArray.includes(-1)) {
        return card
      }
    })

    dispatch(setCards(newCardsArray))
  }, [filters])

  return (
    <div className="content">
      {cards.map((card: Cards) => (
        <Card
          key={uniqid('content__card__')}
          frontTitle={getFrontTitle(card.title)}
          backTitle={getBackTitle(card.title)}
          description={card.description}
          featured={card.featured}
          url={card.url}
          tags={card.tags}
          image={card.image}
          isMobile={isMobile}
        />
      ))}
    </div>
  )
}
