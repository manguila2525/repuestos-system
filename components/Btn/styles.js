import css from 'styled-jsx/css'
import theme from '../../theme'

export default css`
  button {
    padding: 10px 15px;
    margin: 0 3px;
    border-radius: 3px;
    cursor: pointer;
  }
  .edit {
    border: none;
    background: ${theme.primary};
  }
  .delete {
    border: none;
    background: ${theme.danger};
  }
`
