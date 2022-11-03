import { ReactNode } from 'react'
import { BrandBar, Footer } from './components'

import './Template.scss'

type Props = {
  children: ReactNode
}

export default function Template({ children }: Props) {
  return (
    <div className="template">
      <BrandBar />
      <main className="template__content">
        {children}
        <Footer />
      </main>
    </div>
  )
}
