import styles from "./Header.module.scss";
import recipe from "../assets/images/logo.png";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import { useNavigate } from 'react-router-dom';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
      navigate('/login'); };
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <img src={recipe} alt="logo-recipe" />
      </div>
      <ul className={styles.headerList}>
        <button className="mr-5 btn btn-reverse-primary">
          <i class="fa-solid fa-heart mr-5"></i>
          <span>Wishlist</span>
        </button>
        <button className="btn btn-primary" onClick={handleLoginClick} >Login</button>
      </ul>
      <i
        onClick={() => setShowMenu(true)}
        className={`fa-solid fa-bars ${styles.headerXs}`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(true)} className="calc"></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;
