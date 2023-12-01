import { useState } from "react";
import { Avatar } from "./Avatar"
import styleComment from "./Comment.module.css"
import { ThumbsUp, Trash } from '@phosphor-icons/react';

export function Comment({ content, onDeleteComment }){

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        // console.log('deletar comentário')
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

    return(
        <div className={styleComment.comment}>
            <Avatar hasBorder={false} src="https://source.unsplash.com/random?blue" />

            <div className={styleComment.commentBox}>
                <div className={styleComment.commentContent}>
                    <header>
                        <div className={styleComment.authorAndTime}>
                            <strong>Thiago Coelho</strong>
                            <time title="11 de maio as 9:13" dateTime="2022-05-11">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p> {content} </p>

                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span >{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}