import BoardRow from "./BoardRow";

const Board = (props) => {
    const gameData = props.gameData;
    let rows = Array();

    for(let i = 0; i < gameData.maxRows; i++){
        rows.push(<BoardRow id={i} gameData={gameData}/>)
    }
    
    return (
        <div>
            {rows}
        </div>
    )
}

export default Board;