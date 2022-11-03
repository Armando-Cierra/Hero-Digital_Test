import { ThemeMenu } from '../'
import { Logo } from '@/components'
import './BrandBar.scss'

export default function Header() {
  return (
    <header className="brandBar">
      <Logo className="brandBar__logo" type="Logo" />
      <ThemeMenu />
    </header>
  )
}
