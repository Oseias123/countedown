import React, {Fragment} from "react";

const relogio = ({timerDias, timerHoras, timerMinutos, timerSegundos}) => {
   
return (
    <Fragment>
    <section className="timer-container">
 
    <section className="timer">
 
    <div className="Relogio">
        <section>
            <p>{timerDias}</p>
            <small>Dias</small>
        </section>
        <span>:</span>
        <section>
            <p>{timerHoras}</p>
            <small>Horas</small>
        </section>{""}
        <span>:</span>
        <section>
            <p>{timerMinutos}</p>
            <small>Minutos</small>
        </section>{""}
        <span>:</span>
        <section>
            <p>{timerSegundos}</p>
            <small>Segundos</small>
        </section>
     </div>
    
     </section>
    
     </section>
   
 
 </Fragment>
 )
};

relogio.defaultProps={
    timerDias:10,
    timerHoras:10,
    timerMinutos:10,
    timerSegundos:10,

}
 export default relogio;