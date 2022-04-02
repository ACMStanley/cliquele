import BoardRow from "./BoardRow";

const Board = (props) => {
    return (
        <div>
            <BoardRow wordLength={props.wordLength} lettersEntered={props.lettersEntered}/>
        </div>
    )
}

export default Board;