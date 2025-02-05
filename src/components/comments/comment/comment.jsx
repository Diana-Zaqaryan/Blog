import PropTypes from "prop-types";
import styles from "../../comments/comment/comment.module.css";

function Comment({comments}) {
    return (
        <div className={styles.users_container}>
            <ul className={styles.list}>
                {comments.map(comment =>
                    <li key={comment.id}
                        className={styles.item}>
                        <div className={styles.profile_photo}>
                            <img src={'src/assets/profile.png'} alt='profile image'/>
                            <div>
                                <ul className={styles.info}>
                                    <li><h3 className={styles.comment_name}>{comment.name} </h3></li>
                                    <li className={styles.email}><i className='fa fa-envelope'></i>{comment.email}</li>
                                </ul>
                            </div>
                        </div>


                        <p>{comment.body}</p>
                    </li>)}
            </ul>
        </div>
    )
}


Comment.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        postId: PropTypes.number,
        id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
        body: PropTypes.string
    }))
}


export default Comment