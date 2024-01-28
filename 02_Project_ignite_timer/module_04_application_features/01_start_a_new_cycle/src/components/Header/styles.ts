import styledHeader from 'styled-components'
import { DefaultTheme } from 'styled-components/dist/types'

export const HeaderContainer = styledHeader.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav{
        display: flex;
        gap: 0.5rem;
    }

    a{
        width: 3rem;
        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;

        color: ${(props: DefaultTheme) => props.theme['gray-100']};

        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;

        &:hover{
            border-bottom-color: ${(props: DefaultTheme) =>
              props.theme['green-500']};
        }

        &.active{
            color: ${(props: DefaultTheme) => props.theme['green-500']};
        }
    }

`
