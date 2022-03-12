import { useEffect, useState } from "react"
import "../contador/contador.css"
export const CuentaRegresiva= ()=>{

    const [timerhours, setTimerHours]=useState()
    const [timerMinuts, setTimerMinuts]=useState()
    const [timerdays, setTimerDays]=useState()
    const [timerseg, setTimerSeg]=useState()
    let interval;
    const startTimer=()=>{
        const countDowntDate= new Date("Dec 31,2022").getTime();
        interval=setInterval(()=>{
            const now=new Date().getTime();
            const distance=countDowntDate-now;

            const days= Math.floor(distance/(24*60*60*1000))
            const hours= Math.floor(distance % (24*60*60*1000)/(1000*60*60))
            const Minutos= Math.floor(distance % (60*60*1000)/(1000*60))
            const segundos= Math.floor(distance % (60*1000)/(1000))

            if(distance<0){
                //stop timer
                clearInterval(interval.current);
            }
            else{
                //update
                setTimerHours(hours)
                setTimerDays(days)
                setTimerMinuts(Minutos)
                setTimerSeg(segundos)
            }

        })

    }

    useEffect(()=>{
        startTimer()

    })


    return(
    <div>
        <div className="timer-container">
        <h2>Fin de año en:</h2>
            <div className="clock">
                
                <div className="d-flex justify-content-center"><p className="numero">{timerdays}</p><p className="palabrapequeña">Días</p></div>
                <div className="d-flex justify-content-center"><p className="numero"> {timerhours}</p><p className="palabrapequeña">Horas</p></div>
                <div className="d-flex justify-content-center"><p className="numero">{timerMinuts}</p><p className="palabrapequeña"> Minutos</p></div>
                <div className="d-flex justify-content-center"><p className="numero">{timerseg}</p><p className="palabrapequeña" >Segundos</p></div>
            </div>
        </div>
    </div>


)

}