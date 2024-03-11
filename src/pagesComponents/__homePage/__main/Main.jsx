import React from 'react';
import main from '../../../assets/mainPage.jpg';

import styles from './main.module.css';
import Navbar from '../../../components/__navbar/Navbar';
const Main = () => {
  return (
    <div>
      <div className={styles.main__container}>
        <img src={main} className={styles.main__image} alt='Main Page' />

        <Navbar></Navbar>

        <div className={styles.main__textContainer}>
          <p className={styles.main__text}>
            Үйде тамақ әзірлегенді ұнататындар
            <p className={styles.main__subtextMain}>
              үшін инновациялық қызмет!
            </p>
          </p>
          <p className={styles.main__subText}>
            Ингредиенттеріңізбен жасалған дәмді рецепттерді табыңыз! <br />{' '}
            Дүкенге бармай-ақ, өзіңізде бар нәрсені енгізіп, сәйкес <br />
            келетін рецепттерді алыңыз!
          </p>
        </div>
        <div className={styles.main__buttonContainer}>
          <button className={styles.main__izdeu}>Рецепттерді іздеу...</button>
          <button className={styles.main__tandau}>Өнімдерді таңдау</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
