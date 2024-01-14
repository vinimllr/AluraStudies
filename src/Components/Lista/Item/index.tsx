import Itarefa from "../../../shared/interfaces/Itarefa";
import style from "./Item.module.scss"


interface ItemProps extends Itarefa{
    selecionarTarefa: (id: string) => void;
  }

const Item = (
    {
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id, 
        selecionarTarefa
    } : ItemProps) => {
    return (
        <>
            <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
             onClick={() => !completado && selecionarTarefa(id)}>
                <h3>
                    {tarefa}
                </h3>
                <span>
                    {tempo}
                </span>
                {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
            </li>
        </>
    )
}

export default Item;