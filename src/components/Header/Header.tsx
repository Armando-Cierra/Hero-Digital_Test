import { Swiper, SwiperSlide } from 'swiper/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import uniqid from 'uniqid'
import { EffectFade, Autoplay } from 'swiper'
import type { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import 'swiper/css'
import 'swiper/css/effect-fade'
import './Header.scss'
import { Cards } from '@/types'

export default function Header() {
  const baseCollection = useSelector(
    (state: RootState) => state.hero.baseCollection
  )

  return (
    <header className="header">
      <div className="header__slideshowBox">
        <div className="header__slideshowBox__gradient" />
        <Swiper
          className="header__slideshowBox__slideshow"
          loop
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 2500,
          }}
        >
          {baseCollection.map((card: Cards) => (
            <SwiperSlide key={uniqid('heroSlideshow__')}>
              <LazyLoadImage
                className="header__slideshowBox__slideshow__image"
                effect="blur"
                src={card.image}
                alt={card.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="header__textBox">
        <h1 className="header__textBox__title">Portfolio</h1>
        <p className="header__textBox__description">
          Discover our success stories and learn more about{' '}
          <a
            className="header__textBox__description__link"
            href="https://herodigital.com/"
            target="_blank"
            rel="noreferrer"
          >
            Hero Digital
          </a>
          , our methodology, culture and customer experiences with their unique
          and tailored websites.
        </p>
      </div>
    </header>
  )
}
