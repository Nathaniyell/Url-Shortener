import React, {useState} from 'react';
import logo from '../images/logo.svg';
import styles from './NavBar.module.css';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';


const NavBar = () => {
    const [showNav, setShowNav] = useState(false);
    function clickHandler(){
        setShowNav(prevValue =>{
           return !prevValue
        })
    }

    return (
        <nav className={styles.nav}>
            <header>
                <img src={logo} alt='logo' />
            </header>
            
            <ul className={styles[showNav ? 'navLinks' : 'navDesktop']}>
            
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
                <ul className={styles.navLinks2}>
                    <li>Login</li>
                    <li>Sign Up</li>
                </ul>
            </ul>
            <button className={styles.navBtn} onClick = {clickHandler}>{showNav ? <MdClose /> : <FaBars />}</button>
        </nav>
    )
}

export default NavBar