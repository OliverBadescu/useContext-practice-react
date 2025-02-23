import { useContext, useState } from "react";
import Player from "../Player/Player";
import Header from "../Header/Header";
import AddPlayer from "../AddPlayer/AddPlayer";
import { PlayerContext } from "../../service/state/PlayerContext";


export default function Home(){

   

    const{players} = useContext(PlayerContext)


    return (

        <>
           <Header/>

            <main>
                
                {
                    players.length > 0 && players.map((pl) => <Player key = {pl.id} player = {pl}/>)
                }
               
                <AddPlayer  />
                    
            </main>
        </>
    );
}