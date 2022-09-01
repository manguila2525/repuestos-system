import { useState } from 'react'
import styles from './styles'
import FormGroup from '../FormGroup'
const Index = () => {
  const [spare, setSpare] = useState({
    title: '',
    description: '',
    price: 0,
    count: 1,
  })
  const handleInput = (e) => {
    setSpare({
      ...spare,
      [e.target.name]: e.target.value,
    })
  }
  const sendSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <main>
        <form
          method='POST'
          action='http://localhost:8000/api/spare'
          encType='multipart/form-data'
        >
          <h2>Add spare</h2>
          <FormGroup placeholder='Nombre del repuesto' name='title' />
          <FormGroup
            placeholder='Descripcion del repuesto'
            name='description'
            onChange={handleInput}
          />
          <FormGroup
            placeholder='Cantidad de repuestos'
            type='number'
            name='count'
            onChange={handleInput}
          />
          <FormGroup
            placeholder='Precio del repuesto'
            type='number'
            name='price'
            onChange={handleInput}
          />
          <FormGroup type='file' name='image' onChange={handleInput} />
          <FormGroup type='submit' value='Añadir' />
        </form>
      </main>
      <style jsx>{styles}</style>
    </>
  )
}

export default Index
