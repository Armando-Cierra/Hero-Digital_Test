import classNames from 'classnames'
import { Logo } from '@/components'
import './Loader.scss'

type Props = {
  loading: boolean
}

export default function Loader({ loading }: Props) {
  return (
    <div
      className={classNames('loaderView', {
        'loaderView--hidden': !loading,
      })}
    >
      <Logo type="Isotype" className="loaderView__loader" />
    </div>
  )
}
