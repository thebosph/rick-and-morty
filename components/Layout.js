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
        {`.page-transition-wrapper {
          height: 100%;`}
      </style>
    </div>
  )
}

export default Layout
