import Layouts from '@/Layouts/Layouts'
import { store } from '@/components/redux/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'


export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
       <Layouts>
      <Component {...pageProps} />
    </Layouts>
    </Provider>
   
  )
}
