import {useEffect, useState} from "react";
import Post from "./post/post.jsx";
import PropTypes from "prop-types";

function PostsList({userId, handlePostClick, selectedPostId}) {

    const [posts, setPosts] =useState([])

    function handleClick(postId) {
        handlePostClick(postId)
    }

    useEffect(()=> {
        const getPosts = async () => {
            const url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
            try {
                const response = await fetch(url);
                return await response.json();

            } catch (error) {
                console.error("Error: ", error.message);
            }
        };
        getPosts().then(data =>  setPosts(data))
    },[userId])


    return(
        <Post posts={posts} handle={handleClick} selectedPostId={selectedPostId}/>
    )

}


PostsList.propTypes = {
    userId: PropTypes.number,
    handlePostClick: PropTypes.func,
    selectedPostId: PropTypes.number
}

export default PostsList