import BoardSquare from "./BoardSquare";
import styles from './Board.module.css';

const BoardRow = (props) => {
    const gameData = props.gameData;
    let squares = Array(gameData.wordLength).fill(<BoardSquare value={null} />)


    if(gameData.activeRow === props.id && !gameData.isCurrentWordValid){
        for (let i = 0; i < gameData.wordLength; i++) {
            squares[i] = <BoardSquare value={gameData.lettersEntered[i]} type={"WRONG"}/>;
        }
    }
    

    else if (gameData.wordsEntered.length > props.id) {
        for (let i = 0; i < gameData.wordLength; i++) {
            squares[i] = <BoardSquare value={gameData.wordsEntered[props.id].letters[i]} type={gameData.wordsEntered[props.id].matches[i]}/>;
        }
    }

    else if (gameData.activeRow === props.id){
        for (let i = 0;
            i < (gameData.lettersEntered.length >= gameData.wordLength
                ? gameData.wordLength
                : gameData.lettersEntered.length);
            i++) {

            squares[i] = <BoardSquare value={gameData.lettersEntered[i]} type={"EMPTY"}/>;
        }
    }

    return (
        <div className={styles.boardRow}>
            {squares}
        </div>
    )
}

export default BoardRow;