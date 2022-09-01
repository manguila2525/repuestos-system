import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../../components/Layout'
import styles from './styles'
import Btn from '../../../components/Btn'
import { useSelector } from 'react-redux'

const Index = ({ data }) => {
  const idioma = useSelector((state) => state.idioma)
  const [info, setData] = useState(data)
  //DELETE SPARE
  const deleteSpare = async (id) => {
    console.log(id)
    // await fetch('http://localhost:8000/api/spare', {
    //   method: 'DELETE',
    //   body: id,
    // })
  }
  useEffect(() => {
    console.log(info)
  }, [info])

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  const getSpare = () => {
    return info.map(({ title, description, _id, imageUrl }) => (
      <li key={_id}>
        <Image
          loader={myLoader}
          src={imageUrl}
          width={100}
          height={100}
        ></Image>
        <section>
          <h3> {title}</h3>
          <p>{description}</p>
        </section>
        <div>
          <Link href={`/dashboard/repuestos/${_id}`}>
            <a>{idioma.language === 'es' ? 'Ver mas...' : 'See more...'}</a>
          </Link>
          <Btn eraser={true} id={_id}></Btn>
        </div>
        <style jsx>{styles}</style>
      </li>
    ))
  }

  return (
    <>
      <Layout idioma={idioma}>
        <h1>{idioma.titleRepuesto}</h1>
        <ul>{getSpare()}</ul>
      </Layout>
      <style jsx>{styles}</style>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const res = await fetch('http://localhost:8000/api/spare')
    const data = await res.json()
    console.log(data)
    return { props: { data: data.data } }
  } catch (error) {
    console.log(error)
  }
}

export default Index
