import Image from 'next/image'
import styles from './page.module.css'
import Clicker from '../lib/Components/Clicker'

export default function Home() {
  return (
    <div>
      <h1>Main Page</h1>
      <Clicker></Clicker>
    </div>
  )
}
