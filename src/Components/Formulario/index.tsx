import { useState } from "react"
import Botao from "../Botao"
import styles from './Formulario.module.scss'
import Itarefa from "../../shared/interfaces/Itarefa"
import { v4 as uuidv4 } from 'uuid';

interface FormularioProps{
    aoAdicionarTarefa: (tarefa: Itarefa) => void
}

const Formulario = ({aoAdicionarTarefa}:FormularioProps) => {

    const [tarefa, setTarefa] = useState("")
    const [tempo, setTempo] = useState("")

    function adicionarNovaTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        aoAdicionarTarefa({tarefa, tempo, selecionado: false, completado: false, id:uuidv4()})
        setTarefa("")
        setTempo("")
    }

    return (
        <form className={styles.novaTarefa} onSubmit={(event) => adicionarNovaTarefa(event)}>
            <div className={styles.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required
                    value={tarefa}
                    onChange={(event) => setTarefa(event.target.value)}
                />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="06:30:00"
                    required
                    value={tempo}
                    onChange={(event) => setTempo(event.target.value)}
                />
            </div>
            <Botao type="submit">
                Adicionar
            </Botao>
                
        </form>
    )
}

export default Formulario;