import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import service from '../appwrite/config';
import {Container, PostCard} from '../components';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        service.getPosts()
        .then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        })
    }, []);

  if(posts.length === 0) {
    return (
      <div className="w-full py-8">
        <Container>
          <h2 className="text-center text-2xl font-bold">No Posts Available</h2>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/3">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home
