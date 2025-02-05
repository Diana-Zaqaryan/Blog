import {useEffect, useState} from "react";
import Post from "./post/post";
import {PostModel} from "../../models/post.model";


interface PostListProp {
    userId: number,
    handlePostClick: any,
    selectedPostId: number
}
function PostsList({userId, handlePostClick, selectedPostId}: PostListProp) {

    const [posts, setPosts] =useState<PostModel[] | []>([])

    function handleClick(postId: number) {
        handlePostClick(postId)
    }

    useEffect(()=> {
        const getPosts = async (): Promise<PostModel[]> => {
            const url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
            try {
                const response = await fetch(url);
                return await response.json() as PostModel[];

            } catch (error: Error) {
                console.error("Error: ", error.message);
            }
        };
        getPosts().then((data: PostModel[]) =>  setPosts(data))
    },[userId])


    return(
        <Post posts={posts} handle={handleClick} selectedPostId={selectedPostId}/>
    )

}


export default PostsList