import '../styles/globals.scss'
import 'antd/dist/antd.css';
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import { AuthContextProvider } from 'modules/auth'
import MainLayout from 'shared/components/Layout/MainLayout'

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS 

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
