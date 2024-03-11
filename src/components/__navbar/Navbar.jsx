import React from 'react';
import styles from './navbar.module.css';
import user from '../../assets/user.png';
import heart from '../../assets/heart.png';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  let navigate = useNavigate();
  const handleNavigatePath = (path) => navigate(path);
  return (
    <div>
      <header className={styles.main__header}>
        <img
          src={logo}
          className={styles.main__logo}
          onClick={() => handleNavigatePath('/')}></img>
        <img
          src={user}
          className={styles.main__userLogo}
          onClick={() => handleNavigatePath('/register')}
          alt='User Logo'
        />
        <img
          src={heart}
          className={styles.main__heartLogo}
          alt='hear Logo'></img>
      </header>
    </div>
  );
};

export default Navbar;
