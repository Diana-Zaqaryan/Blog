import {useQuery} from "@tanstack/react-query";
import {CommentModel} from "../models/comment.model";

function useComments(postId) {
    const getComments = async (): Promise<any> => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
        try {
            const response = await fetch(url);
            return  response.json()
        } catch (error: Error) {
            console.error("Error: ", error.message);
        }
    };

    const {data, error, isLoading} = useQuery({
        queryKey: ['comments', postId],
        queryFn: getComments,
        select: data => data as CommentModel[]
    })


    return {data, isLoading, error}
}

export default useComments