/**
 * TodoTemplate
 *
 * @package components
 */
import { InputForm } from "../../atoms/InputForm";
import { AddTodo } from "../../organisms/AddTodo";
import { TodoList } from "../../organisms/TodoLlist";
import { useTodo } from "../../../hooks/useTodo.js";
import styles from "./styles.module.css";

/**
 * TodoTemplate
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoTemplate = () => {
  // カスタムフックから状態とロジックを呼び出してコンポーネントにあてがう
  const [
    { addInputValue, searchKeyword, showTodoList },
    {
      onChangeAddInputValue,
      handleAddTodo,
      handleDeleteTodo,
      handleChangeSearchKeyword,
    },
  ] = useTodo();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      {/* Todo追加エリア */}
      <section className={styles.common}>
        <AddTodo
          addInputValue={addInputValue}
          onChangeTodo={onChangeAddInputValue}
          handleAddTodo={handleAddTodo}
        />
      </section>
      {/* Todo検索フォームエリア */}
      <section className={styles.common}>
        <InputForm
          role={"search-todo-input-form"}
          inputValue={searchKeyword}
          placeholder={"Search Keyword"}
          handleChangeValue={handleChangeSearchKeyword}
        />
      </section>
      {/* Todoリスト一覧表示 */}
      <section className={styles.common}>
        {showTodoList.length > 0 && (
          <TodoList
            todoList={showTodoList}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      </section>
    </div>
  );
};
