/**
 * InputForm
 *
 * @package components
 */
import styles from "./style.module.css";

/**
 * InputForm
 * @param {*} props
 * @returns
 */
export const InputForm = (props) => {
  /* props */
  const { role, inputValue, placeholder, handleChangeValue, handleKeyDown } =
    props;

  return (
    <input
      role={role}
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChangeValue}
      onKeyDown={handleKeyDown}
    />
  );
};
