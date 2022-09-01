import css from 'styled-jsx/css'
import theme from '../../../../theme'

export default css`
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
    height: 80vh;
    align-items: center;
    position: relative;
  }
  div {
    flex-grow: 1;

    max-width: 710px;
  }
  img {
    width: 100%;
  }
  aside {
    flex-grow: 1;
    width: 300px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  a {
    position: absolute;
    top: 0;
    left: 0;
  }
  ul {
    list-style: none;
    padding: 0px 30px;
  }
  li {
    margin: 10px 0;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: space-between;
  }
  li h3 {
    font-weight: 100;
  }
  li h2 {
    font-weight: normal;
    color: ${theme.info};
  }
`
