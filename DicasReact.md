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

### CSS COMBINATORS ###
## adjacent sibling selector (+) ##
seletor adjacente


segue a lógica de que a o estilo só vai ser aplicado quando
tiver outro antes dele
    .post + .post{
        margin-top: 2rem;
    }


### DECLARAÇÃO IMPERATIVA E DECLARATIVA ###
## estudar esses assuntos ##

o react usa declaração declarativa


### CONTROLLED VS UNCONTROLLED ###


### USESTATE ###
  /**
   * sempre iniciar um state com a informação de mesmo tipo da qual vai ser manipuldo os dados
   * no caso abaixo o useState tem que iniciar com [], porque o interface Cycle é um []
   */

### typescript ###

se em uma variavel voce declarar o tipo, automaticamente o intellisense dara as opções armazenadas naquele dado
por exemplo:

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}

const newCycle: Cycle ={
  aqui voce poderar pedir ao intellisense para ver as opções de dados disponivel  
}