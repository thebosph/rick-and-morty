import React from 'react'
import Layout from '../components/layout.js'
import unfetch from 'isomorphic-unfetch'
import Link from 'next/link'
import slug from 'slug'

const Characters = ({ characters }) => {
  return (
    <Layout>
      <ul className="d-flex flex-wrap container justify-content-center">
        {characters?.results.map((character) => (
          <li className="card p-3 opacity-50 cardd m-2" key={character.id}>
            <img
              width={300}
              height={250}
              className="card-img-top"
              src={character.image}
              alt={character.name}
            />
            <Link
              href="/character/[slug]"
              as={`/character/${slug(character.name)}-${character.id}`}
            >
              <a className="fw-light text-decoration-none text-white">
                {character.name} | Click for details...
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .card {
          width: 18rem;
          background-color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await unfetch('https://rickandmortyapi.com/api/character')
  const characters = await response.json()

  return {
    props: {
      characters
    }
  }
}

export default Characters
