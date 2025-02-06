import Post from "./post/post";

import usePosts from "../../custom-hooks/usePosts";


interface PostListProp {
    userId: number | null,
    handlePostClick: any,
    selectedPostId: number| null
}
function PostsList({userId, handlePostClick, selectedPostId}: PostListProp) {

    function handleClick(postId: number) {
        handlePostClick(postId)
    }

    const {data, isLoading, error} = usePosts(userId)

    if (isLoading) {
        return   <div className="custom-loader"></div>
    }

    if (error) {
        return <div>{error.message}</div>
    }

    return(
        <Post posts={data} handle={handleClick} selectedPostId={selectedPostId}/>
    )

}


export default PostsList