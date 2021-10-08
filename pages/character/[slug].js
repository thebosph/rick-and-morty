import React from 'react'

import { useRouter } from 'next/router'

import Layout from '../../components/Layout'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

const CharacterDetails = ({ character }) => {
  const { image, name, gender, status, species } = character
  const router = useRouter()

  return (
    <Layout>
      <div className="container mt-5 mb-5">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-6 border-end">
              <div className="d-flex flex-column justify-content-center">
                <div className="main_image">
                  <img src={image} id="main_product_image" width="350"></img>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 right-side">
                <div className="d-flex justify-content-between align-items-center">
                  <h3>{name} </h3>{' '}
                  <span className="heart">
                    <i className="bx bx-heart"></i>
                  </span>
                </div>
                <div className="mt-2 pr-3 content">
                  <p>Gender: {gender}</p>
                  <p>Status: {status} </p>
                  <p>Species: {species}</p>
                </div>

                <div className="buttons d-flex flex-row mt-5 gap-3">
                  {' '}
                  <button
                    onClick={() => router.back()}
                    className="btn btn-outline-dark"
                  >
                    Comeback
                  </button>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .main_image {
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid #eee;
            height: 400px;
            width: 100%;
            overflow: hidden;
          }
        `}
      </style>
    </Layout>
  )
}

export async function getStaticPaths() {
  const response = await unfetch('https://rickandmortyapi.com/api/character')
  const characters = await response.json()

  const paths = characters.results.map((character) => {
    return { params: { slug: `${slug(character.name)}-${character.id}` } }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const id = params.slug.split('-').slice(-1)[0]
  const response = await unfetch(
    'https://rickandmortyapi.com/api/character/' + id
  )
  const character = await response.json()

  return {
    props: {
      character
    }
  }
}

export default CharacterDetails
