import React, { useEffect, useState } from 'react'
import dbService from '../appwrite/db_service'
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'


function Home() {
    const authStatus = useSelector(state => state.auth.status)
    console.log(authStatus)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        dbService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])



    return  authStatus ?  (
        <div className='w-full py-8'>
            <Container>
                <div className={`flex flex-wrap ${posts.length ===0 ? 'justify-center' : null}`}>
                     {posts.length !==0 ? posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    )): (
                        <div className='font-bold text-2xl'>
                            No Posts
                        </div>
                    ) }
                </div>
            </Container>
        </div>
    ) :
    (
        <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
    )
}

export default Home
