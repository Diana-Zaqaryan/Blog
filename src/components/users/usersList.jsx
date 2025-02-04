import {useEffect, useState} from "react";
import User from "./user/user.jsx";
import PropTypes from "prop-types";
import styled from "styled-components";


const UserListWrapper = styled.div`
    width: 390px;
`
function UsersList({handleUserId, selectedUserId}) {

    function handleUser(userId) {
        handleUserId(userId)
    }

    const [users, setUsers] =useState([])

    useEffect(()=> {
        const getUsers = async () => {
            const url = "https://jsonplaceholder.typicode.com/users/";
            try {
                const response = await fetch(url);
                return await response.json();
            } catch (error) {
                console.error("Error: ", error.message);
            }
        };
        getUsers().then(data =>  setUsers(data))
    },[])


    return (

        <UserListWrapper>
            <User users={users} handleUser={handleUser} selectedUserId={selectedUserId}/>
        </UserListWrapper>

    )
}


UsersList.propTypes = {
    handleUserId: PropTypes.func,
    selectedUserId: PropTypes.number
}

export default UsersList