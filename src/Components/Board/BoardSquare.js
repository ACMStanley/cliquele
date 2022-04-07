import styles from './Board.module.css'

const BoardSquare = (props) => {

    let style;
    switch(props.type){
        case "COMPLETE":
            style = styles.squareComplete;
            break;
        case "PARTIAL":
            style = styles.squarePartial;
            break;
        case "NONE":
            style = styles.squareNone;
            break;
        case "WRONG":
            style = styles.squareWrong;
            break;
        default:
            style = styles.square;
    }

    return (
        <div className={style}>
            {props.value}
        </div>
    )
}

export default BoardSquare;