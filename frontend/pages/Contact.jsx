import styles from '../styles/Contact.module.css';
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
                </div>
            </nav>

            <div className={styles.items}>
                <h1>Curious how this project was built?</h1>
                <h2>This app was built with Next.js, React.js, and the Google Maps API. If you're 
                curious to see how to utilize the Google Maps API, you can check out the source code  <a href='https://github.com/nrfletcher/historymaps'>here</a></h2>

                <h1>What is HistoryMaps?</h1>
                <h2>HistoryMaps is meant to be an informative way to experience history geographically.</h2>
                <h1>Why?</h1>
                <h2>So much of history is determined by where things happened, and oftentimes 
                    locations of where events occured reveal much to us about how certain things unfolded.</h2>
                <h1>What things can be learned by comparing and contrasting geographic aspects of history?</h1>
                <h2>The development and downfall of civilizations, the ways in which cultures 
                    trade and assimilate values, and political boundaries, all shape history simply by proximity.</h2>
            </div>

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