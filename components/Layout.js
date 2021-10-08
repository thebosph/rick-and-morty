import React from 'react'
import Footer from './footer'
import Navigation from './navigation'

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
