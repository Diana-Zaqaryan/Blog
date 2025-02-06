import User from "./user/user";
import styled from "styled-components";

import useUsers from "../../custom-hooks/useUsers";
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

    const {data, isLoading, error}  = useUsers();



    return (

        <UserListWrapper>
            { isLoading ? (<div className="custom-loader"></div>)
                : !!error ? (<div>{error.message}</div>) :
                    <User users={data} handleUser={handleUser} selectedUserId={selectedUserId}/>
            }
        </UserListWrapper>

    )
}


export default UsersList