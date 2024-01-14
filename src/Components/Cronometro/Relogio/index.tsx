import style from "./Relogio.module.scss"

interface RelogioProps {
  tempo: Number | undefined
}

export default function Relogio({ tempo = 0 }: RelogioProps) {
  const minutos = Math.floor(Number(tempo) / 60);
  const segundos = Number(tempo) % 60;
  const [minutoCentena, minutoDezena, minutoUnidade] = String(minutos).padStart(3, "0");
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0");
  return (
    <>
      {Number(minutoCentena) > 0 ? <span className={style.relogioNumero}>{minutoCentena}</span> : ""}
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>
  )
}