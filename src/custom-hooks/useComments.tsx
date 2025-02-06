import {useQuery} from "@tanstack/react-query";
import {CommentModel} from "../models/comment.model";
import {httpService} from "../services/http.service";

function useComments(postId: number ) {


    const {data, error, isLoading} = useQuery({
        queryKey: ['comments', postId],
        staleTime: 100000,
        queryFn: () => httpService.getComments(postId),
        select: data => data as CommentModel[]
    })


    return {data, isLoading, error}
}

export default useComments