import styles from "../../comments/comment/comment.module.css";
import {CommentModel} from "../../../models/comment.model";
import {ReactElement} from "react";

function Comment({comments}: {comments: CommentModel[]}) {

    function createComments(comments: CommentModel[]): ReactElement {
        return (
            <ul className={styles.list}>
                {comments.map((comment: CommentModel) =>
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
        )
    }

    return (
        <div className={styles.users_container}>
            {createComments(comments)}
        </div>
    )
}


export default Comment