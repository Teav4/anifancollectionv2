import '../styles/globals.scss'
import 'antd/dist/antd.css';
import { AuthContextProvider } from 'modules/auth'
import MainLayout from 'shared/components/Layout/MainLayout'

function App({ Component, pageProps }: any) {
  return (
    <AuthContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AuthContextProvider>
  )
}

export default App
