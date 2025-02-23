import { useEffect, useState } from "react";


export default function Header(){
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(()=>{

        let interval;

        if(isRunning){
            interval = setInterval(()=> setTime(time+1),10);
        }

        return()=> clearInterval(interval);
    }, [isRunning, time]);

    const seconds = Math.floor((time % 6000) / 100);

    const startAndStop = () => {
        setIsRunning(!isRunning);
    };

    const reset = () => {
        setTime(0);
    };


  
    return (

        <>
        
        <header>
                <div className="score">
                    <p>Total players: </p>
                    <p>Total points: </p>
                </div>
                    <h1>SCOREBOARD</h1>
                <div className="stopwatch">
                        <h1>STOPWACH</h1>
                        <p>{seconds.toString().padStart(1, "0")}</p>    
                        <div className="buttons">
                            <button className="btn start"onClick={startAndStop} >{isRunning ? "Stop" : "Start"}</button>
                            <button className="btn reset" onClick={reset} >Reset </button>
                        </div>
                </div>
            </header>
        </>

    );

}