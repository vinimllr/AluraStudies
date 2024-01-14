import { ReactElement } from "react";
import style from './Botao.module.scss'

interface BotaoProps {
    children: ReactElement | string
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void;
}

const Botao = ({children, type="button", onClick} : BotaoProps) => { 
    return(
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}

export default Botao;