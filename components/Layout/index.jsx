import styles from './styles'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
const Index = ({ children, idioma }) => {
  return (
    <>
      <Navbar idioma={idioma} />
      <div>
        <Sidebar idioma={idioma} />
        <main>{children}</main>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default Index
