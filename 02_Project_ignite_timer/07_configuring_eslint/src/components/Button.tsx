// import stylesButton from './Button.module.css';
import { ButtonContainer, ButtonVariantColor } from './Button.styles'

interface ButtonProps {
  variantColor?: ButtonVariantColor
}

export function Button({ variantColor = 'primary' }: ButtonProps) {
  return <ButtonContainer variantColor={variantColor}>Enviar</ButtonContainer>
}
