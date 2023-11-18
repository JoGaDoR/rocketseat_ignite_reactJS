import { Avatar } from "./Avatar"
import styleComment from "./Comment.module.css"
import { ThumbsUp, Trash } from '@phosphor-icons/react';

export function Comment(){
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

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!</p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}