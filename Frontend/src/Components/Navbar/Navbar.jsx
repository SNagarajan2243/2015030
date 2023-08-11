// import { useEffect } from 'react'
import styles from './Navbar.module.css'
// import Trains from './../Trains/Trains'

const Navbar = () => {


  return (
    <div className={styles.navbarWrapper}>
      <h1 className={styles.navbarHeading}>
        SN Central
      </h1>
      <p style={{color: 'white'}}>
        {new Date().toLocaleDateString()}
      </p>
    </div>
  )
}

export default Navbar
