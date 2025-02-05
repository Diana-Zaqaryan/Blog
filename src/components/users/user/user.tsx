import styles from "./user.module.css"
import {UserModel} from "../../../models/user.model";


interface UserProps  {
    users: UserModel[],
    handleUser: any,
    selectedUserId: number
}
function User({users, handleUser, selectedUserId}: UserProps) {

    console.log(selectedUserId)
    function handleClick( userId: number): void {
        handleUser(userId)
    }

    return (
        <div className= {styles.users_container}>
            <ul className={styles.list}>
                {users.map((user: UserModel )=> {
                    return <li
                        className={selectedUserId===user.id ? styles.active : styles.item}
                        key={user.id}
                        onClick={() =>handleClick(user.id)}

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
        </div>

    )
}


export default User