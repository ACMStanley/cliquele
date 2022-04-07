import BoardRow from "./BoardRow";

const Board = (props) => {
    return (
        <div>
            <BoardRow wordLength={props.wordLength} lettersEntered={props.lettersEntered} wordsEntered={props.wordsEntered}/>
        </div>
    )
}

export default Board;