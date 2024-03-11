import React from 'react';
import styles from './profile.module.css'
import logo from '../../assets/profile.svg'
const Form = () => {
  return (
    <div className={styles.main__form}>
      <form className={styles.form}>
        <div className={styles.form__container}>
          <div>
        <img src={logo} alt='profile'></img>
        <div className={styles.form__nameContainer}>
        <div>Айгерім</div>
        <div> Дәулетқызы</div>
        </div>
        </div>
        <div>
        <div className={styles.form_textContainer}>
          <span className={styles.form__firstText}>Аты</span> 
           <span className={styles.form__secondText}>Айгерим</span>
        </div>
        <hr></hr>
        <div className={styles.form_textContainer}>
          <span className={styles.form__firstText}>Тегі </span> 
           <span className={styles.form__secondText}>Дәулетқызы</span>
        </div>
        <hr></hr>
        <div className={styles.form_textContainer}>
          <span className={styles.form__firstText}>Email</span> 
           <span className={styles.form__secondText}>azoon.512@gmail.com</span>
        </div>
        <hr></hr>
        <div className={styles.form_textContainer}>
          <span className={styles.form__firstText}>Құпиясөз</span> 
           <span className={styles.form__secondText}>.................</span>
        </div>
        <hr></hr>
        <div className={styles.form_textContainer}>
          <span className={styles.form__firstText}>Жасы</span> 
           <span className={styles.form__secondText}>20</span>
        </div>
        <hr></hr>
        <div className={styles.form_textContainer}>
          <span className={styles.form__firstText}>Салмағы</span> 
           <span className={styles.form__secondText}>55 кг</span>
        </div>
        <hr></hr>
        </div>
        </div>
        <div className={styles.buttonContainer}>
        <button className={styles.button}>Мәліметтерді өзгерту</button>
        </div>
      </form>
    </div>
  );
};

export default Form;