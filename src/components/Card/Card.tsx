import { useState } from 'react'
import uniqid from 'uniqid'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import SvgCollection from '@/assets/svg-collection.svg'
import './Card.scss'
import classNames from 'classnames'

type Props = {
  frontTitle: string
  backTitle: string
  description: string
  image: string
  featured?: number
  url: string
  tags: string[]
  isMobile: boolean
}

export default function Card({
  frontTitle,
  backTitle,
  description,
  image,
  featured = 0,
  url,
  tags,
  isMobile,
}: Props) {
  const [active, setActive] = useState(false)

  return (
    <div
      className={classNames('cardBox', {
        'cardBox--desktop': !isMobile,
        'cardBox--mobile': isMobile,
        'cardBox--mobile--active': active,
      })}
      onClick={() => {
        setActive((prevState) => !prevState)
      }}
    >
      <div className="cardBox__card cardBox__card--front">
        <div className="cardBox__card__header">
          <LazyLoadImage
            className="cardBox__card__header__img"
            alt={backTitle}
            src={image}
          />
          <div className="cardBox__card__header__gradient" />
          {featured === 1 && (
            <div className="cardBox__card__header__featured">
              <span>Featured</span>
              <svg fill="currentColor">
                <use href={`${SvgCollection}#star`} />
              </svg>
            </div>
          )}
        </div>
        <div className="cardBox__card__textBox">
          <div className="cardBox__card__textBox__title">
            <h2>{frontTitle}</h2>
          </div>
          <div className="cardBox__card__textBox__description">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="cardBox__card cardBox__card--back">
        <div className="cardBox__card__header">
          <LazyLoadImage
            className="cardBox__card__header__img"
            alt={backTitle}
            src={image}
          />
          <div className="cardBox__card__header__gradient" />
        </div>
        <div className="cardBox__card__textBox">
          <h3>{backTitle}</h3>
          <div className="cardBox__card__textBox__tagBox">
            {tags.map((tag) => (
              <div
                key={uniqid('cardBox__card__textBox__tagBox__tag__')}
                className="cardBox__card__textBox__tagBox__tag"
              >
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="cardBox__card__footer">
          <a href={url} target="_blank" rel="noreferrer">
            <span>Learn More</span>
            <svg fill="currentColor">
              <use href={`${SvgCollection}#chevron-right`} />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
