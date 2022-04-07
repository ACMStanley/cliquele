import BoardSquare from "./BoardSquare";
import styles from './Board.module.css';

const BoardRow = (props) => {

    let squares = Array(props.wordLength).fill(<BoardSquare value={null} />)
    if(!props.isCurrentWordValid){
        for (let i = 0; i < props.wordLength; i++) {
            squares[i] = <BoardSquare value={props.lettersEntered[i]} type={"WRONG"}/>;
        }
    }
    else if (props.wordsEntered.length > 0) {
        for (let i = 0; i < props.wordLength; i++) {
            squares[i] = <BoardSquare value={props.wordsEntered[0].letters[i]} type={props.wordsEntered[0].matches[i]}/>;
        }
    }
    else {
        for (let i = 0;
            i < (props.lettersEntered.length >= props.wordLength
                ? props.wordLength
                : props.lettersEntered.length);
            i++) {

            squares[i] = <BoardSquare value={props.lettersEntered[i]} type={"EMPTY"}/>;
        }
    }

    return (
        <div className={styles.boardRow}>
            {squares}
        </div>
    )
}

export default BoardRow;