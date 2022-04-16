import BoardRow from "./BoardRow";
import styles from "./Board.module.css";

const Board = (props) => {
    const gameData = props.gameData;
    let rows = [];

    for(let i = 0; i < gameData.maxRows; i++){
        rows.push(<BoardRow id={i} gameData={gameData}/>)
    }
    
    return (
        <div className={styles.board}>
            {rows}
        </div>
    )
}

export default Board;