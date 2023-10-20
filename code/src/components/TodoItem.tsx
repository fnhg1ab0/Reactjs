import React from "react";
import styles from './TodoItem.module.css';

const TodoItem: React.FC<{ onRemove: () => void, title: string }> = (props) => {
    return (
        <li onClick={props.onRemove} className={styles.item}>{props.title}</li>
    );
}
export default TodoItem;