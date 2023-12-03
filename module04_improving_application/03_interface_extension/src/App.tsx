import { Header } from "./components/Header.jsx";
import { Post, PostType } from "./components/Post.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

import styleApp from "./App.module.css";

import "./global.css";

export function App() {
  const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/jogador.png",
        name: "Thiago",
        role: "Estudante",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fizno NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2022-05-03 20:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/will.png",
        name: "Will Vaqueiro",
        role: "Diretor",
      },
      content: [
        { type: "paragraph", content: "E aí vaqueiros 👋" },
        {
          type: "paragraph",
          content:
            "adipisicing elit. Expedita modi nam nemo. Rerum qui hic, possimus voluptatibus distinctio consequuntur ipsa dolorum voluptatem accusantium at modi dolorem saepe, beatae quo sapiente🚀",
        },
        { type: "link", content: "mygits.design/doedu" },
      ],
      publishedAt: new Date("2022-05-10 21:00:00"),
    },
  ];

  return (
    <div>
      <Header />

      <div className={styleApp.wrapper}>
      <Sidebar />
      <main>
        {
          posts.map((post) => (
            <Post
            key={post.id}
              post={post}
            />
          ))
        }
      </main>
      </div>
      
    </div>
  );
}

// export default App
