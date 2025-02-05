import {useEffect, useState} from "react";
import Comment from "./comment/comment";
import styled from "styled-components";
import {CommentModel} from "../../models/comment.model";


const CommentListWrapper = styled.div`
    width: 400px;
`
function CommentsList({postId}:{postId: number}) {
    const [comments, setComments] =useState<CommentModel[] | []>([])

    useEffect(()=> {
        const getComments = async (): Promise<CommentModel[]> => {
            const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
            try {
                const response = await fetch(url);
                return await response.json() as CommentModel[]
            } catch (error: Error) {
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


export default CommentsList