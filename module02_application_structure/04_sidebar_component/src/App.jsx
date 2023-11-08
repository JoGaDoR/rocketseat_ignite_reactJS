import { Post } from "./Post.jsx";
import { Header } from "./components/Header.jsx";

import styleApp from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styleApp.wrapper}></div>
      <aside>
        siderbar
      </aside>
      <main>
        <Post author="Thiago" content="lorem ipsum dolor sit amet" />
        <Post
          author="Truta"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, consectetur enim recusandae magnam veritat"
        />
      </main>
    </div>
  );
}

// export default App
