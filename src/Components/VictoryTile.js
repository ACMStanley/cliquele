const VictoryTile = (props) => {
    return(
        <div>
            {props.didWin ? <h1>Congrats. You Won!</h1> : <h1>Loser!</h1>}
        </div>
        
    )
}

export default VictoryTile;