import { useState } from "react"
import Cronometro from "../Components/Cronometro"
import Formulario from "../Components/Formulario"
import Lista from "../Components/Lista"
import style from './App.module.scss'
import Itarefa from "../shared/interfaces/Itarefa"

function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState<Itarefa[]>([])
  const [tarefaSelecionada, setTarefaSelecionada] = useState<Itarefa>()

  function aoAdicionarTarefa(tarefaAdicionada : Itarefa){
    setListaDeTarefas([...listaDeTarefas, {...tarefaAdicionada}])
  console.log(listaDeTarefas)}

  function selecionarTarefa(id: string){
    const novaListaDeTarefas = listaDeTarefas.map((tarefa) => {
      return {
        ...tarefa,
        selecionado: tarefa.id === id,
      };
    });
    setListaDeTarefas(novaListaDeTarefas);
    setTarefaSelecionada(novaListaDeTarefas.find(tarefa => tarefa.selecionado=== true))
    console.log(tarefaSelecionada)
  }

  function finalizarTarefa() {
    if(tarefaSelecionada) {
        setListaDeTarefas(listaDeTarefas =>
        listaDeTarefas.map(tarefa => {
            if(tarefa.id === tarefaSelecionada.id) {
                return {
                    ...tarefa,
                    selecionado: false,
                    completado: true
                }
            }
            return tarefa;
        }))
    }
}

  return (
    <>
      <div className={style.AppStyle}>
        <Formulario aoAdicionarTarefa={aoAdicionarTarefa}/>
        <Lista listaDeTarefas={listaDeTarefas} selecionarTarefa={selecionarTarefa}/>
        <Cronometro finalizarTarefa={finalizarTarefa} tarefaSelecionada={tarefaSelecionada}/>
      </div>
    </>
  )
}

export default App
