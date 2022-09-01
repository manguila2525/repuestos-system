import { useDispatch } from "react-redux";
import styles from "./styles";
const Index = ({ idioma }) => {
  const dispatch = useDispatch();
  const setLanguage = (state) => {
    if (state) {
      dispatch({ type: "en" });
    } else {
      dispatch({ type: "es" });
    }
  };
  return (
    <>
      <nav>
        <div>
          <h3>Idioma</h3>
        </div>
        <ul>
          <li onClick={() => setLanguage(false)}>ES</li>
          <li onClick={() => setLanguage(true)}>EN</li>
          <li>Logout</li>
        </ul>
      </nav>
      <style jsx>{styles}</style>
    </>
  );
};

export default Index;
