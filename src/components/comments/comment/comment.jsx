import PropTypes from "prop-types";
import styles from "../../users/user/user.module.css";

function Comment({comments}) {
    return (
        <div className={styles.users_container}>
            <ul className={styles.list}>
                {comments.map(comment => <li key={comment.id} className={styles.item}>{comment.body}</li>)}
            </ul>
        </div>
    )
}


Comment.propTypes = {
    comments: PropTypes.arrayOf( PropTypes.shape({
        postId: PropTypes.number,
        id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
        body: PropTypes.string
    }))
}


export default Comment