import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Comment from "./comment/comment.jsx";
import styled from "styled-components";


const CommentListWrapper = styled.div`
    width: 400px;
`
function CommentsList({postId}) {
    const [comments, setComments] =useState([])

    useEffect(()=> {
        const getComments = async () => {
            const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
            try {
                const response = await fetch(url);
                return await response.json()
            } catch (error) {
                console.error("Error: ", error.message);
            }
        };
        getComments().then(data =>  setComments(data))
    },[postId])



    return(
        <CommentListWrapper>
            <Comment comments={comments}/>
        </CommentListWrapper>
    )
}


CommentsList.propTypes ={
    postId: PropTypes.number,
}
export default CommentsList