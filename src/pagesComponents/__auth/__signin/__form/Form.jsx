import React from 'react';
import styles from './form.module.css';
import Input from '../../Input';
import logo from '../../../../assets/logo1.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../../Button';
const Form = () => {
  let navigate = useNavigate('');
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabIndex = (index) => {
    setActiveTabIndex(index);
  };
  const handleTabClick = (path) => {
    navigate(path);
  };
  console.log(activeTabIndex);
  return (
    <div className={styles.background}>
      <form className={styles.form}>
        <div className={styles.form__logoContainer}>
          <img src={logo} width={200}></img>
        </div>
        <Tabs selectedIndex={activeTabIndex} onSelect={handleTabIndex}>
          <TabList className={styles.form__linkContainer}>
            <Tab
              onClick={() => handleTabClick('/register')}
              className={styles.form__link}>
              {' '}
              Тіркелу
            </Tab>
            <Tab
              onClick={() => handleTabClick('/login')}
              className={styles.form__link}>
              {' '}
              Кіру
            </Tab>
          </TabList>
        </Tabs>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '10px',
            gap: '20px',
          }}>
          <Input placeholder={'Email'}></Input>
          <Input placeholder={'Құпия сөз'}></Input>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '40px',
          }}>
          <Button text={'Кіру'}></Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
