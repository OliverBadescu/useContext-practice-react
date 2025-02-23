import { createContext,useState } from "react";
import Player from "../../components/Player/Player";

export const PlayerContext=createContext();



export  function PlayerProvider({children}){


  const [players, setPlayers] = useState([
    {
        name:"john",
        score:10,
        id:1
    },
    {
        name: "alex",
        score: 5,
        id:2
    },
    {
        name:"maria",
        score:6,
        id:3
    }
  ])

  const changeScore = (id, score) =>{
    setPlayers(prev=>
        prev.map(player => player.id == id?{...player, score:player.score+score}:player)
    );
  }

  const addPlayer = (newPlayer) =>{
    setPlayers((prev) => [...prev, {...newPlayer, id: prev.length+1},]);
  }

  const deletePlayer = (id) => {
    setPlayers((prev) => prev.filter((player) => player.id !==id));
  }

    const contextValue={

        players,
        changeScore,
        addPlayer,
        deletePlayer
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
    )




}