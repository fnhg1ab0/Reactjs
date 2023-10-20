import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import styles from './Todos.module.css';
import {TodosContext} from "../store/todos-context";

const Todos: React.FC = (props) => {
    const todosCtx = useContext(TodosContext);

    return (
        <ul className={styles.todos}>
            {todosCtx.items.map((item) => (
                <TodoItem key={item.id} title={item.title} onRemove={todosCtx.removeTodo.bind(null, item.id)}/>
            ))
            }
        </ul>
    );
}
export default Todos;