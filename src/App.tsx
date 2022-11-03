import { useEffect } from 'react'
import Helmet from 'react-helmet'
import { useMediaQuery } from 'react-responsive'
import { useDispatch } from 'react-redux'
import { setBaseCollection, setCards } from '@/redux/heroSlice'
import {
  Template,
  Loader,
  Header,
  MobileFilter,
  Content,
  DesktopFilter,
} from '@/components'
import { useFetch } from '@/hooks'

export default function App() {
  const dispatch = useDispatch()
  const { loading, error, data } = useFetch()
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  useEffect(() => {
    if (!loading && !error.state && data !== null) {
      dispatch(setBaseCollection(data))
      dispatch(setCards(data))
    }
  }, [data, error, loading])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="Portfolio"
          content="Test portdfolio gallery that shows all the Hero Digital success stories."
        />
        <title>Hero Digital Test</title>
      </Helmet>

      <Loader loading={loading} />

      <Template>
        <Header />
        {isMobile ? <MobileFilter /> : <DesktopFilter />}
        <Content isMobile={isMobile} />
      </Template>
    </>
  )
}
