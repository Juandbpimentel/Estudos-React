import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/juan-pimentel-3b6a67221/'><FaLinkedin /></a>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Costs</span> &copy; 2022
            </p>
        </footer>
    )
}
export default Footer
