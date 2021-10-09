import React from 'react'
import Footer from './footer.js'
import Navigation from './navigation.js'

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className="container">{children}</div>
      <Footer />
      <style jsx global>
        {``}
      </style>
    </div>
  )
}

export default Layout
