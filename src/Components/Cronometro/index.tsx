
import { useEffect, useState } from "react";
import Itarefa from "../../shared/interfaces/Itarefa";
import Botao from "../Botao";
import style from "./Cronometro.module.scss"
import Relogio from "./Relogio";
import tempoParaSegundos from "../../common/utils/time";


interface CronometroProps{
    tarefaSelecionada: Itarefa | undefined
    finalizarTarefa: () => void;
}

export function Cronometro({tarefaSelecionada, finalizarTarefa} : CronometroProps) {
    const [tempo, setTempo] = useState<Number>()

    useEffect(() => {
        if(tarefaSelecionada?.tempo){
            setTempo(tempoParaSegundos(tarefaSelecionada.tempo))
        }
    }, [tarefaSelecionada])

    function regressiva(contador: number = 0){
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => regressiva(Number(tempo))}>
                Começar!
            </Botao>
        </div>
    )
}

export default Cronometro;