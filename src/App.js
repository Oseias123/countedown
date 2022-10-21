import './App.css';
import Clock from './componente/Clock';
import React, {useState, useEffect}from 'react';

function App() {

const [timerDias, setTimerDias] = useState ();
const [timerHoras, setTimerHoras] = useState ();
const [timerMinutos, setTimerMinutos] = useState ();
const [timerSegundos, setTimerSegundos] = useState ();


let interval; 

const startTimer= () =>{
  const countDownDate= new Date("January 1, 2023").getTime();


    interval= setInterval(() => {
      const now= new Date().getTime ();

      const distance = countDownDate - now;

      const Dias= Math.floor(distance/ (24 * 60 * 60 * 1000));

      const Horas= Math.floor(distance% (24 * 60 * 60 * 1000)/(1000*60*60));

      const Minutos= Math.floor(distance% ( 60 * 60 * 1000)/( 1000*60*60));
  
      const Segundos= Math.floor(distance% ( 60 * 1000)/(1000));

      if (distance<0) {
        // Stop Timer

        clearInterval(interval.current);
      }
      
      else{
        // Update Timer
          setTimerDias(Dias);
          setTimerHoras(Horas);
          setTimerMinutos(Minutos);
          setTimerSegundos(Segundos);
         }
    });
} 

useEffect (()=>{
    startTimer()
});


return (
    <div className="App">
      <Clock timerDias={timerDias} 
             timerHoras={timerHoras}
             timerMinutos={timerMinutos} 
             timerSegundos={timerSegundos} />
    </div>
  );
}

export default App;
