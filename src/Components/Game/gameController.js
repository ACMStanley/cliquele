import checkIfWordValid from "../../api/api";

const WORD = ['J','A','M','E','S'];

const assessWordMatch = (word) => {
    let matches = Array(WORD.length).fill("NONE");

    for(let i = 0; i < WORD.length; i++){
        if(word[i] === WORD[i]){
            matches[i] = "COMPLETE";
            word[i] = null;
        }
    }

    for(let i = 0; i < WORD.length; i++){
        if(word[i] !== null){
            for(let j = 0; j < WORD.length; j++){
                if(WORD[j] !== null && word[i] === WORD[j]){
                    WORD[j] = null;
                    matches[i] = "PARTIAL";
                }
            }
        }
    }
    return matches;
}

export default class GameController{

    checkWord = (letters,addWordGuess,setIsCurrentWordValid) => {
        let letterList = letters.slice();
        let word = letterList.join("")
        console.log(word);
        if(word === WORD.join("")){
            const out = assessWordMatch(letterList);
            addWordGuess({
                letters: letters.slice(),
                matches: out,
            });
        }
        else{
            checkIfWordValid(word).then(isValid => {
                if(isValid){
                    const out = assessWordMatch(letterList);
                    addWordGuess({
                        letters: letters.slice(),
                        matches: out,
                    });
                }
                else{
                    
                }
            }).catch(() => setIsCurrentWordValid(false));
        }
    }
    
}
