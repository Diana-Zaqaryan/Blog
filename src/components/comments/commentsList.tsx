import {useEffect, useState} from "react";
import Comment from "./comment/comment";
import styled from "styled-components";

import useComments from "../../custom-hooks/useComments";


const CommentListWrapper = styled.div`
    width: 400px;
`
function CommentsList({postId}:{postId: number | null}) {

   const  {data, isLoading, error} = useComments(postId)
    if (isLoading) {
        return   <div className="custom-loader"></div>
    }

    if (isLoading) {
        return   <div className="custom-loader"></div>
    }

    if (error) {
        return <div>{error.message}</div>
    }

    return(
        <CommentListWrapper>
            <Comment comments={data}/>
        </CommentListWrapper>
    )
}


export default CommentsList