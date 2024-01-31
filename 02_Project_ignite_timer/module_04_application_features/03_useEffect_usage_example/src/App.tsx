import { useEffect, useState } from 'react'

interface Repo{
  full_name: string
}

function avisarAPI(){
  console.log('lista salva')
}

export function App() {
  const [list, setList] = useState<string[]>([])

  useEffect(() => {
    avisarAPI();
  }, [list])

  useEffect(() => {
    fetch('https://api.github.com/users/diego3g/repos')
    .then(response => response.json())
    .then((data: Repo[]) => {
      setList(data.map((item) => item.full_name))
    })
  }, [])

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

