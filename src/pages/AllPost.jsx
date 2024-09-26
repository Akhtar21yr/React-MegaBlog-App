import React, { useState, useEffect } from 'react'
import dbService from '../appwrite/db_service'
import { Container, PostCard } from '../components'

function AllPost() {
  const [posts, setPosts] = useState([])
  useEffect(() => { }, [])
  dbService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents)
    }
  })

  return (
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">

          {posts.length !== 0 ? posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard {...post} />
            </div>
          )) : (
            <div className='font-bold text-2xl'>
              No Posts
            </div>
          )}


        </div>
      </Container>
    </div>
  )
}

export default AllPost
