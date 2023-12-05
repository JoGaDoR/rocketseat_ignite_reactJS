import stylesButton from './Button.module.css';

interface ButtonProps {
    color?: 'primary' | 'secondary' | 'danger' | 'success';
}

export function Button({ color = 'primary' }: ButtonProps) {
    return <button className={`${stylesButton.button} ${stylesButton[color]}`}>Enviar</button>
}