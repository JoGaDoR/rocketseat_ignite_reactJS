import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import stylePost from "./Post.module.css";


export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(
    [
      "Primeiro post hein?!"
    ]
  )

  const [newCommenttext, setNewCommentText] = useState('')

  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'as' HH:mm'h'",
    { locale: ptBR }
  );

  const publisedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(){
    event.preventDefault()

    // const newCommenttext = event.target.comment.value

    setComments([...comments, newCommenttext])

    // event.target.comment.value = ''
  }

  function handleNewCommentChange(){
    setNewCommentText(event.target.value)

    setNewCommentText('')
  }

  function onDeleteComment(comment){
    const commentWithoutDeleteOne = comments.filter(comment => {
      
    })
  }

  return (
    <article className={stylePost.post}>
      <header>
        <div className={stylePost.author}>
          <Avatar src={author.avatarUrl} />
          <div className={stylePost.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publisedDateRelativeToNow}
        </time>
      </header>

      <div className={stylePost.content}>
        {
          content.map(item => {
            if (item.type === 'paragraph'){
              return <p key={item.content}>{item.content}</p>
            } else if (item.type === "link"){
              return <p key={item.content}><a href="#">{item.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={stylePost.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommenttext}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={stylePost.commentList}>
        {
          comments.map(comment => {
           return <Comment key={comment} content={comment} onDeleteComment={onDeleteComment}/>
          })
        }
      </div>
    </article>
  );
}
