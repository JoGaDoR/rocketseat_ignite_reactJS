import { useEffect, useState } from 'react'

function avisarAPI(){
  console.log('lista salva')
}

export function App() {
  const [list, setList] = useState<string[]>([])

  useEffect(() => {
    avisarAPI();
  }, [list])

  function addToList(){
    setList(state => [...state, "novo tem"])
  }

  return (
      <div>
        <ul>
          {list.map(item => <li>{item}</li>)}
        </ul>

        <button onClick={addToList}>add to list</button>
      </div>
  )
}

