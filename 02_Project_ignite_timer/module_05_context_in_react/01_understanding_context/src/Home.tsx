import { createContext, useContext } from "react";
// import { CountDown } from "./CountDown";
// import { NewCycleForm } from "./NewCycleForm";

//criar uma variavel com o contexto e colocar entre paranteses o valor inicial do contexto
//recomendado iniciar sempre como objeto
export const CyclesContext = createContext({
    activeCycle: 1
  })

  export function CountDown(){
    //usar a informação do CuclesContext usando o useCon
    const { activeCycle } = useContext(CyclesContext)

    return (
        <h1>CountDown: {activeCycle}</h1>
    )
}

export function NewCycleForm(){
    const { activeCycle } = useContext(CyclesContext)

    return (
        <h1>NewCycleForm: {activeCycle}</h1>
    )
}

export function Home () {
    return (
        <div>
            <CountDown/>
            <NewCycleForm/>
        </div>
    )       
}