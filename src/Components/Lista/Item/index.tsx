import style from "./Item.module.scss"

interface ItemProps{
    nome: string
    tempo: string
}

const Item = ({nome, tempo}: ItemProps) => {
    return (
        <>
            <li className={style.item}>
                <h3>
                    {nome}
                </h3>
                <span>
                    {tempo}
                </span>
            </li>
        </>
    )
}

export default Item;