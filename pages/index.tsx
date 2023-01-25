import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tontine Task App</title>
      </Head>
      <div>
        <h1>Something here</h1>
      </div>
    </>
  )
}
