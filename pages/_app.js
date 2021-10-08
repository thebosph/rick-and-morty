import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { motion, AnimatePresence } from 'framer-motion'

import Head from 'next/head'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
