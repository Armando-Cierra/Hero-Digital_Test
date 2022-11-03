import { useState, useEffect } from 'react'
import SvgCollection from '@/assets/svg-collection.svg'
import classNames from 'classnames'
import useMenu from '@/hooks/useMenu'
import './ThemeMenu.scss'

export default function ThemeMenu() {
  const body = document.body

  const [showMenu, setShowMenu] = useState(false)
  const [activeTheme, setActiveTheme] = useState('dark')

  useEffect(() => {
    if (activeTheme === 'light') {
      body.setAttribute('data-theme', 'light')
    } else {
      body.setAttribute('data-theme', 'dark')
    }
  }, [activeTheme])

  useMenu('theme', setShowMenu)

  return (
    <div className="themeMenu">
      <button
        className="themeMenu__button"
        onClick={() => setShowMenu((prevState) => !prevState)}
      >
        <svg fill="currentColor">
          <use href={`${SvgCollection}#more-vertical`} />
        </svg>
      </button>
      <div
        className={classNames('themeMenu__menu', {
          'themeMenu__menu--hiden': !showMenu,
        })}
      >
        <span className="themeMenu__menu__header">Themes</span>
        <div
          className={classNames('themeMenu__menu__item', {
            'themeMenu__menu__item--active': activeTheme === 'light',
          })}
          onClick={() => setActiveTheme('light')}
        >
          <span>Light</span>
        </div>
        <div
          className={classNames('themeMenu__menu__item', {
            'themeMenu__menu__item--active': activeTheme === 'dark',
          })}
          onClick={() => setActiveTheme('dark')}
        >
          <span>Dark</span>
        </div>
      </div>
    </div>
  )
}
