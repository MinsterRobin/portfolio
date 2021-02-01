//import Head from 'next/head'
import styles from '../styles/Home.module.css'
import data from '../components/data.json'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div>
      <header>
        <title>{data.title}</title>
      </header>
      <body className={styles.mainContainer}>
        <Navbar/>
      </body>
    </div>
  )
}
