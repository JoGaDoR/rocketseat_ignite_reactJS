import { Header } from "./components/Header.jsx";
import { Post } from "./components/Post.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

import styleApp from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styleApp.wrapper}>
      <Sidebar />
      <main>
        <Post author="Thiago" content="lorem ipsum dolor sit amet" />
        <Post
          author="Truta"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, consectetur enim recusandae magnam veritat"
        />
      </main>
      </div>
      
    </div>
  );
}

// export default App
