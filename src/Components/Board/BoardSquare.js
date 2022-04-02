import styles from './Board.module.css'

const BoardSquare = (props) => {
    return (
        <div className={styles.square}>
            {props.value}
        </div>
    )
}

export default BoardSquare;