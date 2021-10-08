import Image from 'next/image'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Layout from '../components/Layout'
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
