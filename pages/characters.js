import React from 'react'
import Layout from '../components/Layout'
import unfetch from 'isomorphic-unfetch'
import Link from 'next/link'
import slug from 'slug'
import Image from 'next/image'

const Characters = ({ characters }) => {
  return (
    <Layout>
      <ul className="d-flex flex-wrap container justify-content-center">
        {characters?.results.map((character) => (
          <li className="card  cardd m-2" key={character.id}>
            <Image
              width={400}
              height={400}
              className="card-img-top"
              src={character.image}
              alt={character.name}
            />
            <Link
              href="/character/[slug]"
              as={`/character/${slug(character.name)}-${character.id}`}
            >
              <a>{character.name} | Click for details...</a>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .card {
          width: 18rem;
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
