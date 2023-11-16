import styleComment from "./Comment.module.css"

export function Comment(){
    return(
        <div className={styleComment.comment}>
            <img src="https://source.unsplash.com/random" />

            <div className={styleComment.commentBox}>
                <div className={styleComment.commentContent}>

                </div>

                <footer>
                    Aplaudir
                </footer>
            </div>
        </div>
    )
}