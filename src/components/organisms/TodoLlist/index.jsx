/**
 * TodoList
 *
 * @package components
 */
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* styles */
import styles from "./style.module.css";

/**
 * TodoList
 * @param {*} props
 * @returns
 */
export const TodoList = (props) => {
  /* props */
  const { todoList, handleDeleteTodo } = props;

  return (
    <ul className={styles.list}>
      {todoList.map((todo) => (
        <li key={todo.id} role={`todo-list-${todo.id}`} className={styles.todo}>
          <span role={`todo-list-name-${todo.id}`} className={styles.task}>
            {todo.title}
          </span>
          <div className={styles.far}>
            {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
            <FontAwesomeIcon
              role={"delete-todo-button"}
              icon={faTrashAlt}
              size="lg"
              onClick={() => handleDeleteTodo(todo.id, todo.title)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
