import styles from './Keyboard.module.scss';

const KeyboardKey = (props) => {

    const handleOnClick = () => {
        props.onClick(props.value);
    }

    return (
        <button className={props.style} onClick={handleOnClick}>
            {props.value}
        </button>
    )
}

export default KeyboardKey;