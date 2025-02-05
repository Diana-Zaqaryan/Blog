import {useEffect, useState} from "react";
import User from "./user/user";
import styled from "styled-components";
import {UserModel} from "../../models/user.model";


const UserListWrapper = styled.div`
    width: 390px;
`

interface UserListProp  {
    handleUserId: any,
    selectedUserId: number
}
function UsersList({handleUserId, selectedUserId}: UserListProp) {

    function handleUser(userId: number): void {
        handleUserId(userId)
    }

    const [users, setUsers] =useState<UserModel[] | []>([])

    useEffect(()=> {
        const getUsers = async (): Promise<UserModel[]> => {
            const url = "https://jsonplaceholder.typicode.com/users/";
            try {
                const response = await fetch(url);
                return await response.json() as  UserModel[];
            } catch (error: Error) {
                console.error("Error: ", error.message);
            }
        };
        getUsers().then((data: UserModel[]) =>  setUsers(data))
    },[])


    return (

        <UserListWrapper>
            <User users={users} handleUser={handleUser} selectedUserId={selectedUserId}/>
        </UserListWrapper>

    )
}



export default UsersList