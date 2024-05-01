function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && todoValue.trim() !== "") {
            handleAddTodos(todoValue);
            setTodoValue("");
          }
        }}
        type="text"
        placeholder="Enter ToDo item ..."
      />
      <button
        onClick={() => {
          if (todoValue.trim() !== "") {
            handleAddTodos(todoValue);
            setTodoValue("");
          }
        }}
      >
        Add
      </button>
    </header>
  );
}

export default TodoInput;
