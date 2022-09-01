import css from 'styled-jsx/css'
import theme from '../../../theme'

export default css`
  h1 {
    margin-bottom: 15px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    border-bottom: 1px solid#ccc;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
  }
  section {
    flex-grow: 1;
  }
  a {
    padding: 6px 15px 9px 15px;
    margin: 0 3px;

    border-radius: 3px;
    cursor: pointer;
    border: none;
    background: ${theme.primary};
  }
`
