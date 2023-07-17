import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
 
  return (
    <>
      <Head>
        <title>Got-it</title>
        <meta name="description" content="got it" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br/>
      <p>route page</p>
      <Button variant="outlined" onClick={() => router.push("test-demo")}>got to testing page</Button>
      <br/>
    </>
  )
}
