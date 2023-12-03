import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import stylePost from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'as' HH:mm'h'",
    { locale: ptBR }
  );

  const publisedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

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
              return <p>{item.content}</p>
            } else if (item.type === "link"){
              return <p><a href="#">{item.content}</a></p>
            }
          })
        }
      </div>

      <form className={stylePost.commentForm}>
        <strong>Deixe seu feedback</strong>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
        <textarea />
      </form>

      <div className={stylePost.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
