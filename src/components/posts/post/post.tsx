import styles from './post.module.css'
import {PostModel} from "../../../models/post.model";



interface PostProps {
    posts: PostModel[],
    handle: any,
    selectedPostId: number
}
function Post({posts, handle, selectedPostId}: PostProps){

    function handleClick(postId: number) {
        handle(postId)
    }

    return (

    <div className={styles.post_container}>
        <ul className={styles.list}>
            {posts.map((post : PostModel) => <li
                key={post.id}
                className={selectedPostId === post.id ? styles.active : styles.item}

            >
                <div className={styles.post_info}>
                    <h3 className={styles.post_title}>{post.title}</h3>
                    <p>{post.body}</p>
                    <small className={styles.after}
                         onClick={() => handleClick(post.id)}>
                         Show Comments
                    </small>
                </div>
            </li>)}

        </ul>
    </div>
)
}



export default Post