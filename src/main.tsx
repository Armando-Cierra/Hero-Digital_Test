import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import App from '@/App'
import '@/styles/Variables.scss'
import '@/styles/GlobalStyles.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
