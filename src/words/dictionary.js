const START_DATE = new Date(2022,4,16);
const ONE_DAY = 24 * 60 * 60 * 1000;

class Dictionary{
    constructor(){
        this.language = [
            "AIDEN",
            "BETHA",
            "CLAUD",
            "ETHAN",
            "HARRY",
            "JACOB",
            "JONAT",
            "KIRST",
            "MATTI",
            "NASTY",
            "OSCAR",
            "RACHE",
            "SAMUE",
            "SHANN"
        ]
    }

    getTodaysWord(){
        const today = new Date();
        const daysSinceStart = Math.round(Math.abs((START_DATE - today) / ONE_DAY));
        return this.language[daysSinceStart % this.language.length];
    }

    checkIfWordValid(word){
        return this.language.includes(word);
    }
}

export default Dictionary;