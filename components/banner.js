import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className="card bg-dark text-white shadow-lg">
        <img src="/images/rickandmorty.png" className="card-img" />
        <div className="card-img-overlay mt-5 pt-5">
          <h5 className="card-title text-center">Rick And Morty</h5>
          <p className="card-text text-center">
            You can access all the characters from the characters page.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner
