import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { motion, AnimatePresence } from 'framer-motion'

import Head from 'next/head'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <AnimatePresence>
      <div className="page-transition-wrapper">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          id="page-transition-container"
        >
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Component {...pageProps} />
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
export default MyApp
