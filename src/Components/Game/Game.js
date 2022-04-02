import { useState } from "react";
import Board from "../Board/Board";
import Keyboard from "../Keyboard/Keyboard";
import styles from './Game.module.css'

const WORD_LENGTH = 5;

const Game = () => {
    const [lettersEntered,setLettersEntered] = useState([]);

    const keyFunctions = {
        letterClick: letter =>{
            if(lettersEntered.length < WORD_LENGTH){
                setLettersEntered(lettersEntered.concat([letter]));
            }
        },
        deleteClick: () => {
            if(lettersEntered.length > 0){
                setLettersEntered(lettersEntered.slice(0,lettersEntered.length - 1));
            }
        },
        enterClick: () => {
            //TODO
        }
    }

    return(
        <div className={styles.game}>
            <Board wordLength={WORD_LENGTH} lettersEntered={lettersEntered}/>
            <Keyboard keyFunctions={keyFunctions}/>
        </div>
    )
}

export default Game;