import BoardSquare from "./BoardSquare";
import styles from './Board.module.css';

const BoardRow = (props) => {

    let squares = Array(props.wordLength).fill(<BoardSquare value={null}/>)

    for(let i = 0; 
        i < (props.lettersEntered.length >= props.wordLength
            ? props.wordLength 
            : props.lettersEntered.length); 
        i++){

        squares[i] = <BoardSquare value={props.lettersEntered[i]}/>;
    }

    return (
        <div className={styles.boardRow}>
            {squares}
        </div>
    )
}

export default BoardRow;