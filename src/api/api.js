import axios from "axios";

const checkIfWordValid = (word) => {
    return axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(res => !res.data.hasOwnProperty('title'));
}

export default checkIfWordValid;