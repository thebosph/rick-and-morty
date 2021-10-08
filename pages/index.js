import Image from 'next/image'
import Banner from '../components/banner.js'
import Card from '../components/card.js'
import Layout from '../components/layout.js'
import randm from '../public/images/rickandmorty.png'

export default function Home() {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-8">
          <Banner />
        </div>
        <div className="col-md-4 mt-3 h-100">
          <Card />
        </div>
      </div>
    </Layout>
  )
}
