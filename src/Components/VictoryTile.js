import { useState } from "react";

const URL = "https://cliquele.vercel.app/";

const VictoryTile = (props) => {
    const [copyText,setCopyText] = useState("Copy result to clipboard: ");

    let resultText;

    resultText = "Play cliquele here -> " + URL + "\n"

    props.wordsEntered.map(
        word => {
            let matches = word.matches;
            resultText += "\n"
            matches.map(
                match => {
                    switch(match){
                        case "COMPLETE":
                            resultText += "🟩";
                            break;
                        case "PARTIAL":
                            resultText += "🟨";
                            break;
                        case "NONE":
                            resultText += "⬜";
                            break;
                    }
                }
            )
        }
    )

    const handleOnClick = () => {
        navigator.clipboard.writeText(resultText);
        setCopyText("COPIED! ");
    }

    return(
        <div>
            {props.didWin ? <h1>Congrats. You Won!</h1> : <h1>Loser!</h1>}
            <span>{copyText}</span>
            <button onClick={handleOnClick}>📋</button>
        </div>
    )
}

export default VictoryTile;