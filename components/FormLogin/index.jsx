import styles from './styles'
import FormGroup from '../FormGroup'
const Index = () => {
  const sendSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <main>
        <form onSubmit={sendSubmit}>
          <h2>Form login</h2>
          <FormGroup />
          <FormGroup type='password' />
          <FormGroup type='submit' value='Enviar' />
        </form>
      </main>
      <style jsx>{styles}</style>
    </>
  )
}

export default Index
