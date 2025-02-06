class HttpService {
   async getUser (): Promise<any> {
        const url = "https://jsonplaceholder.typicode.com/users/";
        try {
            const response = await fetch(url);
            return  response.json() ;
        } catch (error: unknown) {
            if (error instanceof Error)
            console.error("Error: ", error.message);
        }
    };

    async getPosts (userId: number): Promise<any> {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
        try {
            const response = await fetch(url);
            return  response.json();
        } catch (error: unknown) {
            if (error instanceof Error)
            console.error("Error: ", error.message);
        }
    };

    async getComments (postId: number): Promise<any> {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
        try {
            const response = await fetch(url);
            return  response.json()
        } catch (error: unknown) {
            if (error instanceof Error)
            console.error("Error: ", error.message);
        }
    };
}


export const httpService = new HttpService()