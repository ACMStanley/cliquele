import KeyboardRow from './KeyboardRow';
import styles from './Keyboard.module.css';

const row1 = ['Q','W','E','R','T','Y','U','I','O','P']
const row2 = ['A','S','D','F','G','H','J','K','L']
const row3 = ['✓','Z','X','C','V','B','N','M','⌫']

const Keyboard = (props) => {

    const addRow = (row) => <KeyboardRow keys={row} keyFunctions={props.keyFunctions}/>

    return (
        <div className={styles.keyboard}>
            {addRow(row1)}
            {addRow(row2)}
            {addRow(row3)}
        </div>
    )
}

export default Keyboard;