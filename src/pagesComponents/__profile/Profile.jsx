import React from 'react'
import Navbar from '../../components/__navbar/Navbar'
import SubNavbar from './SubNavbar'
import styles from './profile.module.css'
import Form from './Form'
import Footer from '../../components/__footer/Footer'
export default function Profile() {
  return (
    <div>
      <Navbar></Navbar>
       <div className={styles.div}></div>
      <SubNavbar></SubNavbar>
      <Form></Form>
      <Footer></Footer>
    </div>
  )
}
