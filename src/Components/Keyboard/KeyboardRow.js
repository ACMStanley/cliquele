import KeyboardKey from "./KeyboardKey";
import styles from './Keyboard.module.css';

const KeyboardRow = (props) => {

    const keyElements = props.keys.map((value) => {
        let onClick;
        let style;

        switch(value){
            case '⌫':
                style = styles.deleteKey;
                onClick = props.keyFunctions.deleteClick;
                break;
            case '✓':
                style = styles.enterKey;
                onClick = props.keyFunctions.enterClick;
                break;
            default:
                style = styles.key;
                onClick = props.keyFunctions.letterClick;
        }

        return <KeyboardKey value={value} onClick={onClick} style={style}/>
    })

    return (
        <div className={styles.keyboardRow}>
            {keyElements}
        </div>
    )
}

export default KeyboardRow;