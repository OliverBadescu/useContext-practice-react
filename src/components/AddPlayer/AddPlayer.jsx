import { useContext, useState } from "react";
import { PlayerContext } from "../../service/state/PlayerContext";

export default function AddPlayer(){


    const {addPlayer}=useContext(PlayerContext);

    const [playerName, setPlayerName] = useState("");
    

    const handleChange = (e) => {

        setPlayerName(e.target.value);

    }

    
    const handleAddPlayer = () =>{
        if(playerName.trim() === ""){
            alert("err");
            return;
        }

        const newPlayer = {
            name: playerName,
            score: 0,
            id:Date.now()
        }

        addPlayer(newPlayer);
        setPlayerName("");
    }
    



    return(

        <>
        
            <div className="input">
                <input type="text" className="player" placeholder="ENTER A PLAYER NAME" value={playerName} onChange={handleChange}></input>
                <button className="btn playerAdd" onClick={handleAddPlayer}>Add player</button>
            </div>
        </>

    );
}