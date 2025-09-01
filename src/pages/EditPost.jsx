import React, { useState, useEffect } from 'react'
import { Container, PostForm } from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Service  from '../appwrite/config';
function EditPost() {
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {slug}  = useParams();

    useEffect(() => {
        if(slug){
            Service.getPost(slug)
            .then((post) => {
                if(post){
                    setPost(post);
                }
            })
        } else {
                navigate("/")
        }
    }, [slug, navigate]);

  return post? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null 
}

export default EditPost
