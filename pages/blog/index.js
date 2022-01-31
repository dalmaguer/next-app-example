import Head from 'next/head'
import Link from 'next/link'
import { getPosts } from '../../services/posts'
import styles from './styles.module.css'

export default function Blog ({posts}) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>Posts</h1>
      <ul>
        {
          posts.map(post => (
            <li key={post.id} className={styles.row}>
              <Link href={`/blog/post/${post.id}`}>
                <a>{post.id} - {post.title}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export async function getStaticProps(){
  const posts = await getPosts()
  return {
    props: { posts }
  }
}
