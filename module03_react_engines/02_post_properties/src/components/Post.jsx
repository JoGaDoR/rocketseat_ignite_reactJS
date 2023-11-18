import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import stylePost from "./Post.module.css";

export function Post({ author, publishedAt }) {
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
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a>jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
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
