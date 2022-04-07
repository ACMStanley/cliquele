import { useState } from "react";
import Board from "../Board/Board";
import Keyboard from "../Keyboard/Keyboard";
import styles from './Game.module.css'
import GameController from "./gameController";

const WORD_LENGTH = 5;

const gameController = new GameController();

const Game = () => {
    const [lettersEntered, setLettersEntered] = useState([]);
    const [wordsEntered,setWordsEntered] = useState([]);
    
    const isWordEntered = wordsEntered.length > 0;

    const addWordGuess = (wordData) => {
        setWordsEntered(wordsEntered.concat(wordData))
    }

    const keyFunctions = {
        letterClick: letter => {
            if (lettersEntered.length < WORD_LENGTH) {
                setLettersEntered(lettersEntered.concat([letter]));
            }
        },
        deleteClick: () => {
            if (lettersEntered.length > 0) {
                setLettersEntered(lettersEntered.slice(0, lettersEntered.length - 1));
            }
        },
        enterClick: () => {
            if (lettersEntered.length === WORD_LENGTH) {
                gameController.checkWord(lettersEntered,addWordGuess);
            }
        }
    }

    return (
        <div className={styles.game}>
            <Board wordLength={WORD_LENGTH} lettersEntered={lettersEntered} isWordEntered={isWordEntered} wordsEntered={wordsEntered}/>
            <Keyboard keyFunctions={keyFunctions} />
        </div>
    )
}

export default Game;