import PropTypes from "prop-types";
import styles from './user.module.css'

function User({users, handleUser, selectedUserId}) {

    console.log(selectedUserId)
    function handleClick( userId) {
        handleUser(userId)
    }

    return (
        <div className= {styles.users_container}>
            <ul className={styles.list}>
                {users.map(user => {
                    return <li
                        className={selectedUserId===user.id ? styles.active : styles.item}
                        key={user.id}
                        onClick={() =>handleClick(user.id)}

                    >
                        {user.name}</li>
                })}
            </ul>
        </div>

    )
}

User.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        username: PropTypes.string,
        email: PropTypes.string,
        address: PropTypes.shape({
            street: PropTypes.string,
            suite: PropTypes.string,
            city: PropTypes.string,
            zipcode: PropTypes.string,
            geo: PropTypes.shape({
                lat: PropTypes.string,
                lng: PropTypes.string
            })
        }),
        phone: PropTypes.string,
        website: PropTypes.string,
        company: PropTypes.shape({
            name: PropTypes.string,
            catchPhrase: PropTypes.string,
            bs: PropTypes.string
        })


    })),

    handleUser: PropTypes.func,
    selectedUserId: PropTypes.number


}
export default User