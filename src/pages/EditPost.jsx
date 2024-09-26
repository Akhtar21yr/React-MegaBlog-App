import React,{useState,useEffect} from 'react'
import dbService from '../appwrite/db_service'
import {Container, PostForm} from '../components'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    

    useEffect(() => {
        if (slug) {
            dbService.getPost(slug.slice(1,slug.length )).then((post) => {
                if (post) {
                    setPost(post)
                }
            })
            console.log("Hello")
        }
        else {
            navigate('/')
        }
    },[slug,navigate])


  return post ? (
    <div className='py-8'>
      <Container>
        {!post ? "Loading..............." : <PostForm post={post} />}
      </Container>
    </div>
  ) : null
}

export default EditPost
