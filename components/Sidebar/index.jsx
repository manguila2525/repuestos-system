import styles from './styles'
import Link from 'next/link'
import { useSelector } from 'react-redux'
const Index = () => {
  const idioma = useSelector((state) => state.idioma)
  console.log(idioma)
  return (
    <>
      <div>
        <ul>
          {idioma.sidebar.map(({ item, url }) => (
            <Link key={item} href={url}>
              <li>
                <a>{item}</a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default Index
