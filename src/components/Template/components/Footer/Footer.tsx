import { Logo } from '@/components'
import svgCollection from '@/assets/svg-collection.svg'
import './Footer.scss'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <Logo className="footer__isotype" type="Isotype" />
      <div className="footer__divider" />
      <div className="footer__socialNetworks">
        <svg className="footer__socialNetworks__icon" fill="currentColor">
          <use href={`${svgCollection}#facebook`} />
        </svg>
        <svg className="footer__socialNetworks__icon" fill="currentColor">
          <use href={`${svgCollection}#github`} />
        </svg>
        <svg className="footer__socialNetworks__icon" fill="currentColor">
          <use href={`${svgCollection}#instagram`} />
        </svg>
      </div>
      <span className="footer__rights">All Rights Reserved {year}</span>
    </footer>
  )
}
