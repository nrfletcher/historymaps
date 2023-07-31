import Slider from '../components/SimpleSlider';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Contact() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src='/hmbg.png'></img>
                </div>
                <h3>HistoryMaps</h3>
                <div className={styles.navlinks}>
                    <Link href="/">Home</Link>
                    <Link href="/DefaultMap">Maps</Link>
                    <Link href="/Login">Login</Link>
                    <Link href="/About">About</Link>
                    <Link href="/Contact">Contact</Link>
                </div>
            </nav>

            <Slider></Slider>

            <style jsx global>{`
            html,
            body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }
            * {
                box-sizing: border-box;
            }
            `}</style>
        </div>
    )
}