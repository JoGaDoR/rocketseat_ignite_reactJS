import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header></Header>
      {/* <h1>CONTEUDO</h1> */}
      <Outlet />
    </LayoutContainer>
  )
}
