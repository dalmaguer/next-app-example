import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { getPost } from '../../../services/posts'
import styles from './styles.module.css'

export default function Post(){

  const [post, setPost] = useState({})
  const router = useRouter()
  const { id } = router.query

  const loadPostData = useCallback(async function(){
    const postData = await getPost(id)
    setPost(postData)
  }, [id])

  useEffect(() => {
    loadPostData()
  }, [loadPostData])

  return (
    <>
      <Head>
        <title>
          {post.title}
        </title>
      </Head>
      {
        !post.id
        ? <div className="loading">loading...</div>
        : (
          <div className={styles.postContainer}>
            <h1>{post.id} - {post.title}</h1>
            <p>{post.body}</p>
          </div>
        )
      }
      
    </>
  )
}
