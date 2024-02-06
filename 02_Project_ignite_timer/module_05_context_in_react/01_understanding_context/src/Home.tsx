import { createContext, useContext, useState } from "react";
// import { CountDown } from "./CountDown";
// import { NewCycleForm } from "./NewCycleForm";

//criar uma variavel com o contexto e colocar entre paranteses o valor inicial do contexto
//recomendado iniciar sempre como objeto
// const CyclesContext = createContext({
//     activeCycle: 1
//   })
const CyclesContext = createContext({} as any)

  export function CountDown(){
    //usar a informação do CuclesContext usando o useCon
    const { activeCycle, setActiveCycle } = useContext(CyclesContext)

    return (
        <h1>
            CountDown: {activeCycle}
            <button onClick={() => setActiveCycle(2)}>
                Alterar ciclo
                </button>
        </h1>
    )
}

export function NewCycleForm(){
    const { activeCycle } = useContext(CyclesContext)

    return (
        <h1>NewCycleForm: {activeCycle}</h1>
    )
}

export function Home () {
    //usar um estado para visualizar as alterações do context
    //aqui o valor do activeCycle não sera mais o valor inicial, agora prevalece o do useState/Provider
    const [activeCycle, setActiveCycle] = useState(0)

    return (
        //o Provider do context serve como Props para que se possa compartilhar 
        //informações desejadas apenas com os componentes filhos
        <CyclesContext.Provider value={{activeCycle, setActiveCycle}}>
        <div>
            <CountDown/>
            <NewCycleForm/>
        </div>
        </CyclesContext.Provider>
    )       
}