import {useQuery} from "@tanstack/react-query";
import {PostModel} from "../models/post.model";
import {httpService} from "../services/http.service";


type returnType ={
    data: PostModel[] | undefined,
    isLoading : boolean,
    error: Error | null
}

function usePosts(userId: number): returnType {


    const {data, error, isLoading} = useQuery<PostModel[]>({
        queryKey: ['posts', userId],
        // queryFn: getPosts,
        queryFn: () => httpService.getPosts(userId),
        select: data => data as PostModel[],

    })

    return {data, error, isLoading}
}


export default usePosts