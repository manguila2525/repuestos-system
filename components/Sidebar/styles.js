import css from 'styled-jsx/css'
import theme from '../../theme'
export default css`
  div {
    width: 200px;
    border-right: 1px solid #ccc;
    height: 90vh;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 3px 10px;
  }
  li {
    padding: 10px 15px;
    border: 1px solid #ccc;
    text-align: center;
    margin: 10px 0;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;
    background: ${theme.primary};
  }
`
