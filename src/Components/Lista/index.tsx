import style from './Lista.module.scss'
import Item from './Item';

const Lista = () => {

    const tarefas = [{
        nomeDaTarefa: "React",
        tempo: "02:00:00"
    },
    {
        nomeDaTarefa: "JavaScript",
        tempo: "03:00:00"
    },
    {
        nomeDaTarefa: "TypeScript",
        tempo: "04:00:00"
    }]
    return(
        <aside className={style.listaTarefas}>
        <h2> Estudos do dia </h2>
        <ul>
          {tarefas.map((tarefa, index) => 
          <Item
              nome={tarefa.nomeDaTarefa}
              tempo={tarefa.tempo}
              key={index}
              ></Item>
          )}
        </ul>
      </aside>
    )
}

export default Lista;