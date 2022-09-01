import css from 'styled-jsx/css'

export default css`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10%;
    border-bottom: 1px solid #ccc;
  }
  ul {
    list-style: none;
    display: flex;
  }
  li {
    border: 1px solid #ccc;
    padding: 10px 15px;
    border-radius: 3px;
    color: #5a5a5a;
    cursor: pointer;
  }
`
