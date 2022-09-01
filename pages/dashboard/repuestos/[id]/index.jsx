import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import styles from './styles'
import Layout from '../../../../components/Layout'

const Index = ({ data }) => {
  console.log(data)
  return (
    <>
      <Layout>
        <section>
          <Link href='/dashboard/repuestos'>
            <a>Atras</a>
          </Link>
          <div>
            <img src={data.data.imageUrl} alt={data.data.title} />
          </div>
          <aside>
            <ul>
              <li>
                <h2>Nombre:</h2>
                <h3>{data.data.title}</h3>
              </li>
              <li>
                <h2>Informacion:</h2>
                <h3>{data.data.description}</h3>
              </li>
              <li>
                <h2>Precio:</h2>
                <h3>{data.data.price}</h3>
              </li>
              <li>
                <h2>Cantidad:</h2>
                <h3>{data.data.count}</h3>
              </li>
              <li>
                <h2>Fecha:</h2>
                <h3>{data.data.createdAt.substr(0, 10)}</h3>{' '}
              </li>
            </ul>
          </aside>
        </section>
      </Layout>
      <style jsx>{styles}</style>
    </>
  )
}

export const getStaticPaths = async () => {
  try {
    const { data } = await axios.get('http://localhost:8000/api/spare')
    const paths = data.data.map(({ _id }) => ({ params: { id: `${_id}` } }))
    return { paths, fallback: false }
  } catch (error) {
    console.log(error)
  }
}

export const getStaticProps = async ({ params }) => {
  try {
    const data = await axios.get(`http://localhost:8000/api/spare/${params.id}`)
    return { props: { data: data.data } }
  } catch (error) {
    console.log(error)
  }
}

export default Index
