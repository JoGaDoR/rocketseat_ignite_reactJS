import { Post } from "./Post.jsx";
import { Header } from "./components/Header.jsx";

import "./global.css"

export function App() {
  return (
    <div>
      <Header/>

      <Post 
        author="Thiago" 
        content="lorem ipsum dolor sit amet" 
      />
      <Post 
        author="Truta"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, consectetur enim recusandae magnam veritat"
      />
    </div>
  );
}

// export default App
