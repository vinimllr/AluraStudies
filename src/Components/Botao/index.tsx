import { ReactElement } from "react";
import style from './Botao.module.scss'

interface BotaoProps {
    children: ReactElement | string
}

const Botao = (props : BotaoProps) => {
    return(
        <button className={style.botao}>
            {props.children}
        </button>
    )
}

export default Botao;