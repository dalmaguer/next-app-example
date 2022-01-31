import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'

const posts = [
  {
    id: 1,
    title: 'Post 1' 
  },
  {
    id: 2,
    title: 'Post 2' 
  },
  {
    id: 3,
    title: 'Post 3' 
  },
]

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.Js</title>
        <meta name="description" content='A NextJs App example' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <nav>
          <ul className={styles.navigation}>
            <li>
              <Link href="/" >
                <a>Home</a>
              </Link>
            </li>
            <li className={styles.separator}></li>
            <li>
              <Link href="/profile" >
                <a>Profile</a>
              </Link>
            </li>
            <li className={styles.separator}></li>
            <li>
              <Link href="/blog" >
                <a>Blog</a>
              </Link>
            </li>
            {/* Blog posts */}
            {posts.map(post => (
              <>
                <li key={`${post.id}-separator`}>
                  <div className={styles.separator}></div>
                </li>
                <li key={post.id}>
                  <Link href={`/blog/post/${post.id}`} >
                    <a>{post.title}</a>
                  </Link>
                </li>
              </>
              
            ))}
          </ul>
        </nav>

        { children }      

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
