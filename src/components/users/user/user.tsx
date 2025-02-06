import styles from "./user.module.css"
import {UserModel} from "../../../models/user.model";
import {func} from "prop-types";
import {ReactElement} from "react";


interface UserProps  {
    users: UserModel[] | undefined,
    handleUser: any,
    selectedUserId: number | null
}
function User({users, handleUser, selectedUserId}: UserProps) {

    console.log(selectedUserId)
    function handleClick( userId: number): void {
        handleUser(userId)
    }


    function createUsersList(users: UserModel[] | undefined): ReactElement | undefined {
        if (users?.length) {
            return (
                <ul className={styles.list}>
                    {users.map((user: UserModel) => {
                        return <li
                            className={selectedUserId === user.id ? styles.active : styles.item}
                            key={user.id}
                            onClick={() => handleClick(user.id)}

                        >
                            <div className={styles.profile_photo}>
                                <img src={'src/assets/profile.png'} alt='profile image'/>
                            </div>
                            <div className={styles.profile_info}>
                                <h3 className={styles.userName}> {user.name}</h3>
                                <ul className={styles.info}>
                                    <li><i className='fa fa-envelope'></i>{user.email}</li>
                                    <li><i className='fa fa-map-marker'></i>{user.address.city}</li>
                                    <li><i className='fa fa-phone'></i>{user.phone}</li>
                                    <li><i className='fa fa-briefcase'></i>{user.company.name}</li>

                                </ul>
                            </div>

                        </li>
                    })}
                </ul>
            )
        }
    }

    return (
        <div className={styles.users_container}>
            {createUsersList(users)}
        </div>

    )
}


export default User