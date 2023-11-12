import stylePost from "./Post.module.css";

export function Post() {
  return (
    <article className={stylePost.post}>
      <header>
        <div className={stylePost.author}>
          <img
            className={stylePost.avatar}
            src="https://github.com/jogador"
            alt=""
          />
          <div className={stylePost.authorInfo}>
            <strong>Thiago Coelho</strong>
            <span>CARGO</span>
          </div>
        </div>
        <time title="11 de maio as 9:13" dateTime="2022-05-11">
          Publicado a uma hora
        </time>
      </header>

      <div className={stylePost.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉 <a>jane.design/doctorcare</a></p>

        <p><a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a></p>
      </div>
    </article>
  );
}
