import { useEffect } from 'react'

//Because menus were worked manually, this hook is going to help to close them automatically by clicking outside them or in a selection
export default function useMenu(
  menu: 'theme' | 'mobileFilter',
  setShowMenu: (e: boolean) => void
) {
  useEffect(() => {
    function filteringClick(e: any) {
      const target = e.target

      if (target) {
        if (menu === 'theme') {
          if (!String(target.className).includes('themeMenu__button')) {
            setShowMenu(false)
          }
        } else {
          if (
            !String(target.className).includes('mobileFilter__dropdown__box') &&
            !String(target.className).includes(
              'mobileFilter__dropdown__menu__item'
            )
          ) {
            setShowMenu(false)
          }
        }
      }
    }

    document.addEventListener('click', filteringClick)

    return () => document.removeEventListener('click', filteringClick)
  }, [])
}
