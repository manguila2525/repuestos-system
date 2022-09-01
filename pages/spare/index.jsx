import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {data.map(({ _id, title }) => (
        <div key={_id}>
          <h3>{title}</h3>
          <span>
            <Link href={`/spare/${_id.toString()}`}>
              <a>Ver mas</a>
            </Link>
          </span>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const res = await fetch('http://localhost:8000/api/spare')
    const data = await res.json()
    // const spares = res.map((doc) => {
    //   const result = doc.toObject()
    //   result._id = doc._id.toString()
    //   return result
    // })
    console.log(data)
    return { props: { data: data.data } }
  } catch (error) {
    console.log(error)
  }
}
