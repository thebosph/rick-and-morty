import React from 'react'

const Card = () => {
  return (
    <div className="card border-0 shadow-lg pt-5 position-relative">
      <div className="card-body p-4">
        <div className="card-text pt-0">
          <h5 className="member-name mt-0 text-center text-primary font-weight-bold">
            Rick And Morty Fan Page
          </h5>
          <p>
            {' '}
            A small character sheet for Rick and Morty lovers. It is also a good
            example for me to try frontend technologies. I am getting the data
            through
            <a href="https://rickandmortyapi.com/" className="link-success">
              {' '}
              this
            </a>{' '}
            api.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
