import { useState } from "react";
import Board from "../Board/Board";
import Keyboard from "../Keyboard/Keyboard";
import VictoryTile from "../VictoryTile";
import styles from './Game.module.css'
import GameController from "./gameController";

const WORD_LENGTH = 5;
const MAX_ROWS = 3;

const gameController = new GameController();

const Game = () => {
    const [lettersEntered, setLettersEntered] = useState([]);
    const [wordsEntered, setWordsEntered] = useState([]);
    const [isCurrentWordValid, setIsCurrentWordValid] = useState(true);
    const [activeRow, setActiveRow] = useState(0);
    const [isGameWon, setIsGameWon] = useState(false);
    const [isGameFinished, setIsGameFinished] = useState(false);

    const gameData = {
        wordLength: WORD_LENGTH,
        lettersEntered: lettersEntered,
        wordsEntered: wordsEntered,
        isCurrentWordValid: isCurrentWordValid,
        activeRow: activeRow,
        maxRows: MAX_ROWS
    }

    const isWordFound = (wordData) => {
        const foundArray = ['COMPLETE', 'COMPLETE', 'COMPLETE', 'COMPLETE', 'COMPLETE'];
        for (var i = 0; i < foundArray.length; ++i) {
            if (foundArray[i] !== wordData.matches[i]) return false;
        }
        return true;
    }

    const addWordGuess = (wordData) => {
        setWordsEntered(wordsEntered.concat(wordData))

        if (isWordFound(wordData)) {
            setIsGameWon(true);
            setIsGameFinished(true);
        } else {
            setLettersEntered([])
            setActiveRow(activeRow + 1);
            console.log(activeRow);
            if (activeRow >= MAX_ROWS - 1) {
                setIsGameFinished(true);
            }
        }

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
                setIsCurrentWordValid(true);
            }
        },
        enterClick: () => {
            if (lettersEntered.length === WORD_LENGTH) {
                gameController.checkWord(lettersEntered, addWordGuess, setIsCurrentWordValid);
            }
        }
    }

    return (
        <div className={styles.game}>
            <h1 className={styles.maintitle}>Cliquele</h1>
            <Board
                gameData={gameData}
            />
            {
                !isGameFinished ? <Keyboard keyFunctions={keyFunctions} /> : <VictoryTile didWin={isGameWon} wordsEntered={wordsEntered}/>
            }

        </div>
    )
}

export default Game;