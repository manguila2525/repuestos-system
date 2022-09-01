import styles from './styles'
const Index = ({ type = 'text', value = null, placeholder, name }) => {
  return (
    <>
      <div>
        {value ? (
          <input
            type={type}
            value={value}
            placeholder={placeholder}
            name={name}
          />
        ) : (
          <input type={type} placeholder={placeholder} name={name} />
        )}
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default Index
