import {useQuery} from "@tanstack/react-query";
import {PostModel} from "../models/post.model";
import {UserModel} from "../models/user.model";
import {ReactElement} from "react";


type returnType ={
    data: UserModel[] | undefined,
    isLoading : boolean,
    error: Error | null
}

export default function useUsers(): returnType {

    const getUsers = async (): Promise<any> => {
        const url = "https://jsonplaceholder.typicode.com/users/";
        try {
            const response = await fetch(url);
            return  response.json() ;
        } catch (error: Error) {
            console.error("Error: ", error.message);
        }
    };

    const {data, error, isLoading} = useQuery<UserModel[]>({
        queryKey: ['users'],
        queryFn: getUsers,
        select: data => data as UserModel[], // ***** можно модифецировать данные
        retry:3 , // ****** при failed сделает еще 3 запроса перед тем как показать error
        // enabled: true | false // ****** если true то сделает запрос

    })


    return {data, error, isLoading}
}