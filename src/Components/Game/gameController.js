import Dictionary from "../../words/dictionary";

const dict = new Dictionary();
const WORD_MASTER = dict.getTodaysWord().split('');

const assessWordMatch = (word) => {
    let matches = Array(WORD_MASTER.length).fill("NONE");
    const WORD = WORD_MASTER.slice();
    for(let i = 0; i < WORD.length; i++){
        if(word[i] === WORD[i]){
            matches[i] = "COMPLETE";
            WORD[i] = null;
        }
    }

    for(let i = 0; i < WORD.length; i++){
        if(word[i] !== null){
            for(let j = 0; j < WORD.length; j++){
                if(WORD[j] !== null && word[i] === WORD[j]){
                    word[i] = null;
                    matches[i] = "PARTIAL";
                }
            }
        }
    }
    console.log(word);
    return matches;
}

export default class GameController{

    checkWord = (letters,addWordGuess,setIsCurrentWordValid) => {
        let letterList = letters.slice();
        let word = letterList.join("")
        console.log(word);
        if(word === WORD_MASTER.join("")){
            const out = assessWordMatch(letterList);
            addWordGuess({
                letters: letters.slice(),
                matches: out,
            });
        }
        else{
            let isValid = dict.checkIfWordValid(word);
            if(isValid){
                const out = assessWordMatch(letterList);
                addWordGuess({
                    letters: letters.slice(),
                    matches: out,
                });
            }
            else{
                setIsCurrentWordValid(false);
            }
        }
    }
    
}
