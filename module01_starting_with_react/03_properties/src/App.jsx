import { Post } from "./Post.jsx";

export function App() {
  return (
    <div>
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
