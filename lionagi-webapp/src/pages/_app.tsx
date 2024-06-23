// src/pages/_app.tsx
import { AppProps } from 'next/app'
import { ThemeProvider } from '../providers/theme-provider'
import { Layout } from '../components/layout/Layout'
import { TooltipProvider } from '../components/ui/tooltip'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default MyApp