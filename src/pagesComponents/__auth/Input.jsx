import React from 'react';
import styles from './input.module.css';
const Input = ({ placeholder }) => {
  return (
    <div>
      {placeholder === 'Аты' ? (
        <input
          className={styles.inputNameSurname}
          placeholder={placeholder}></input>
      ) : placeholder === 'Тегі' ? (
        <input
          className={styles.inputNameSurname}
          style={{ marginLeft: '10px' }}
          placeholder={placeholder}></input>
      ) : placeholder === 'Салмағы' ? (
        <input
          className={styles.inputNameSurname}
          style={{ marginLeft: '10px' }}
          placeholder={placeholder}></input>
      ) : placeholder === 'Жасы' ? (
        <input
          className={styles.inputNameSurname}
          placeholder={placeholder}></input>
      ) : (
        <input className={styles.input} placeholder={placeholder}></input>
      )}
    </div>
  );
};

export default Input;
