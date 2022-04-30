import '../styles/globals.css'
import { AuthContextProvider } from 'modules/auth'

function App({ Component, pageProps }: any) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default App
