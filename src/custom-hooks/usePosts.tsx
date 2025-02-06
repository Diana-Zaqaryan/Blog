import {useQuery} from "@tanstack/react-query";
import {PostModel} from "../models/post.model";


type returnType ={
    data: PostModel[] | undefined,
    isLoading : boolean,
    error: Error | null
}

function usePosts(userId: number): returnType {
    const getPosts = async (userId: number): Promise<any> => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
        try {
            const response = await fetch(url);
            return  response.json();
        } catch (error: Error) {
            console.error("Error: ", error.message);
        }
    };

    const {data, error, isLoading} = useQuery<PostModel[]>({
        queryKey: ['posts', userId],
        // queryFn: getPosts,
        queryFn: () => getPosts(userId),
        select: data => data as PostModel[],

    })

    return {data, error, isLoading}
}


export default usePosts