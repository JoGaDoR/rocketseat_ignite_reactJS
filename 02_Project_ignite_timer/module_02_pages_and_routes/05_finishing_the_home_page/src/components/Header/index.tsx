import { HeaderContainer } from './styles'

import logoIgnite from '../../assets/image/ignite-logo.svg'
import { Scroll, Timer } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          {' '}
          <Timer size={24} />{' '}
        </NavLink>
        <NavLink to="/history" title="Hitory">
          {' '}
          <Scroll size={24} />{' '}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
