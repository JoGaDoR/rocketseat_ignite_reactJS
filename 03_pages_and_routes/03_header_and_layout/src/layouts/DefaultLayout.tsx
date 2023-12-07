import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header></Header>
      {/* <h1>CONTEUDO</h1> */}
      <Outlet />
    </div>
  )
}
