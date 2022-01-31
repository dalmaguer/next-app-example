import Head from 'next/head'
import Image from 'next/Image'
import styles from '../styles/Profile.module.css'
import Layout from '../components/Layout'

export default function Profile(){
  return (
    <>
      <Head>
        <title>My Profile</title>
      </Head>
      <h1>My profile!🐶</h1>
      <div className={styles.avatar}>
        <Image src="/avatar.png" width={80} height={80} alt="avatar" />
      </div>
    </>
  )
}

Profile.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}