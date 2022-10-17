import React, { useEffect, useState } from "react";
import GameOver from "./Componentes/GameOver";
import GameBoard from "./Componentes/GameBoard";
import game from './Game/game';

import './index.css';

export default function MemoryGame(props) {

    const [ gameOver , setGameOver ] = useState(true);
    const [ cards , setCards ] =  useState([]);

    useEffect(() => {
        setCards(game.createCardsFromTechs());
    },[])
    
    function restart() {
        game.clearCards();
        setCards(game.createCardsFromTechs());
        setGameOver(false);
    }

    function handleFlip(card) {
 
        game.flipCard(card.id, () => {
            //GameOverCallback
            setGameOver(true)
        },() => {
            // NoMatchCallback
            setCards([...game.cards])
        })

        setCards([...game.cards])

    }

    return(<div>
        <GameBoard handleFlip={handleFlip} cards={ cards } ></GameBoard>
        <GameOver show={ gameOver }  handleRestart={ restart }></GameOver>
    </div>
    )
    
}


