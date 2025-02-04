import PropTypes from "prop-types";
import styles from './post.module.css'


function Post({posts, handle, selectedPostId}){

    function handleClick(postId) {
        handle(postId)
    }

    return (

    <div className={styles.post_container}>
        <ul className={styles.list}>
            {posts.map(post => <li
                key={post.id}
                className={selectedPostId === post.id ? styles.active : styles.item}

            >{post.title}
                <small className={styles.after}
                       onClick={() => handleClick(post.id)}>
                    Show Comments</small>
            </li>)}

        </ul>
    </div>
)
}

Post.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        userId: PropTypes.number,
        id: PropTypes.number,
        title: PropTypes.string,
        body: PropTypes.string

    })),
    handle: PropTypes.func,
    selectedPostId: PropTypes.number
}

export default Post