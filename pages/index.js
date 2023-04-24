import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Button from '@/components/Button'
import Link from 'next/link'

export default function Home() {

  var appname = process.env.NEXT_PUBLIC_APPNAME
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {appname}
        <Image src='/Logo/stacklogo.svg' width='550' height='400' className={styles.logo}/>
        <p className={styles.quote}>"Join the fight against fire hazards with Heat Help - The ultimate fire safety app!"</p>
        <p className={styles.description}>
          Heat Help is the ultimate fire safety app designed to educate and equip you with the knowledge necessary to prevent fires and respond to emergencies. Wherever you go, Heat Help has got you covered.
        </p>

        <Link href='/getstarted'><Button>Get Started</Button></Link>

        <Link href='/getstarted'><Button>Tutorial</Button></Link>

      </main>
    </>
  )
}
