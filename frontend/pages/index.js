import Head from 'next/head';
import HomePage from './HomePage';

/*  Our entry point into the application is via index.js
 *  HomePage.jsx will contain the default "/" page for the site
 */
export default function Home() {
  return (
    <div>
      <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomePage></HomePage>
    </div>
  )
}
