### CSS MODULE ###
## import ##
importar apenas o caminho e o arquivo

arquivo App.jsx
    import { Post } from "./Post.jsx";
    
    //o caminho e o arquivo
    import "./styles.css"

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

    essa é uma forma!
    a segunda e recomendada é fazer com que a importação seja com escopo

