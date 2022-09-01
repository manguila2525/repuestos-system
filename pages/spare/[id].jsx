import Link from 'next/link'
const Id = ({ data }) => {
  return (
    <>
      <Link href='/spare'>
        <a>Atras</a>
      </Link>
      <div>Este es el repuesto:{data.title}</div>
    </>
  )
}

export const getStaticPaths = async () => {
  try {
    const res = await fetch('http://localhost:8000/api/spare')
    const data = await res.json()
    const paths = data.data.map(({ _id }) => ({ params: { id: `${_id}` } }))
    return { paths, fallback: false }
  } catch (error) {
    console.log(error)
  }
}

export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`http://localhost:8000/api/spare/${params.id}`)
    const data = await res.json()
    return { props: { data: data.data } }
  } catch (error) {
    console.log(error)
  }
}

export default Id
