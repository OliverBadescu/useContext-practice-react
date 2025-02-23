import { useContext, useState } from "react"
import { PlayerContext } from "../../service/state/PlayerContext"


export default function Player({player}){



    const {changeScore, deletePlayer} = useContext(PlayerContext);


    return(
        <>
            <div className="playerBox">
                        <div className="player">
                            <span  onClick={() => deletePlayer(player.id)}>
                                <i className="fa-solid fa-x cross"></i>
                            </span>
                            <p>{player.name}</p>
                        </div>
                        <div className="counter">
                            <button className="gray reduce" disabled ={player.score ===0} onClick={() => changeScore(player.id, -1)}>-</button>
                            <p>{player.score}</p>
                            <button className="gray add"  onClick={() => changeScore(player.id, +1)}>+</button>
                        </div>
                    </div>


        </>
    )
}