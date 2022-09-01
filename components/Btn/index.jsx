import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import styles from './styles'

const Index = ({
  children,
  type = 'submit',
  eraser = false,
  edit = false,
  id,
}) => {
  const idioma = useSelector((state) => state.idioma)
  const router = useRouter()
  //DELETE SPARE
  const deleteSpare = async (id) => {
    console.log(id)
    await fetch(`http://localhost:8000/api/spare/${id}`, {
      method: 'DELETE',
      body: id,
    })
    router.push('/dashboard')
  }

  return (
    <>
      {edit && (
        <button className='btn edit' type={type}>
          {children}
        </button>
      )}
      {eraser && (
        <button
          onClick={() => deleteSpare(id)}
          className='btn delete'
          type={type}
        >
          {idioma.language === 'es' ? 'Eliminar' : 'Delete'}
        </button>
      )}
      <style jsx>{styles}</style>
    </>
  )
}

export default Index
