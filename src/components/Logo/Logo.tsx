import classNames from 'classnames'
import svgCollection from '@/assets/svg-collection.svg'

type Props = {
  type: 'Logo' | 'Isotype'
  className?: string
}

export default function Logo({ type, className }: Props) {
  return type === 'Logo' ? (
    <svg
      className={classNames({
        [String(className)]: className,
      })}
      fill="currentColor"
    >
      <use href={`${svgCollection}#logotype`} />
    </svg>
  ) : (
    <svg
      className={classNames({
        [String(className)]: className,
      })}
      fill="currentColor"
    >
      <use href={`${svgCollection}#isotype`} />
    </svg>
  )
}
