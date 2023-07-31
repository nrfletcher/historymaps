import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function HomePage() {
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

            <main>
                <h1 className={styles.title}>
                    Welcome to HistoryMaps &#128204; &#127757;
                </h1>

                <p className={styles.description}>
                    Select a continent of interest to get started on your geographic tour of history!
                </p>

                <div className={styles.grid}>
                    <Link href="/NorthAmericaMap" className={styles.card}>
                    <h3>North America &rarr;</h3>
                    <p>From early colonialism to the 21st century United States!</p>
                    </Link>

                    <Link href="/SouthAmericaMap" className={styles.card}>
                    <h3>South America &rarr;</h3>
                    <p>From Spanish independence to the fall of the Aztecs!</p>
                    </Link>

                    <Link
                    href="/AsiaMap"
                    className={styles.card}
                    >
                    <h3>Asia &rarr;</h3>
                    <p>From the start of the Qin dynasty to the Mongol Empire!</p>
                    </Link>

                    <Link
                    href="/EuropeMap"
                    className={styles.card}
                    >
                    <h3>Europe &rarr;</h3>
                    <p>
                        From the Renaissance to historical World War II!
                    </p>
                    </Link>

                    <Link
                    href="/AfricaMap"
                    className={styles.card}
                    >
                    <h3>Africa &rarr;</h3>
                    <p>
                        From the Pyramids to Kenyan independence!
                    </p>
                    </Link>

                    <Link
                    href="/AustraliaMap"
                    className={styles.card}
                    >
                    <h3>Australia &rarr;</h3>
                    <p>
                        From British colonization to the Gold Rush!
                    </p>
                    </Link>
                </div>
            </main>

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