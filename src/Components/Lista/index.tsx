import style from './Lista.module.scss'
import Item from './Item';
import Itarefa from '../../shared/interfaces/Itarefa';

interface ListaProps{
    listaDeTarefas: Itarefa[]
    selecionarTarefa: (id: string) => void;
}

const Lista = ({listaDeTarefas, selecionarTarefa}: ListaProps) => {
    return(
        <aside className={style.listaTarefas}>
        <h2> Estudos do dia </h2>
        <ul>
          {listaDeTarefas.map((tarefa) => 
          <Item
              selecionarTarefa={selecionarTarefa}
              tarefa={tarefa.tarefa}
              tempo={tarefa.tempo}
              selecionado={tarefa.selecionado}
              completado={tarefa.completado}
              id={tarefa.id}
              key={tarefa.id}
              ></Item>
          )}
        </ul>
      </aside>
    )
}

export default Lista;