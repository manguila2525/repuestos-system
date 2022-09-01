import Layout from '../../../components/Layout'
import CreateSpare from '../../../components/FormAdd'
import { useSelector } from 'react-redux'

const Index = () => {
  const idioma = useSelector((state) => state.idioma)
  return (
    <>
      <Layout idioma={idioma}>
        <h1>Registro</h1>
        <CreateSpare />
      </Layout>
      {/* <style jsx>{styles}</style> */}
    </>
  )
}

export default Index
