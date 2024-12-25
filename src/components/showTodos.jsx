import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../store/todoSlice";
export default function showTodos() {
  const dispatch = useDispatch();
  let todos = useSelector((state) => state.todos);

  const sortedTodos = [...todos].sort((a, b) => {
    return new Date(a.dueDate || 0) - new Date(b.dueDate || 0);
  });
  

  const handleClick = (todo) => {
    dispatch(deleteTodo(todo));
  };
  const handleUpdate = (todo) => {
    dispatch(deleteTodo(todo));
    dispatch(updateTodo(todo));
  };
  return (
    <div className="mt-5 w-full flex items-center flex-col">
      <h2>All Todos</h2>
      {sortedTodos &&
        sortedTodos.length > 0 &&
        sortedTodos.map((todo) => {
          return (
            <div
              key={todo.id}
              className="flex justify-between w-1/2 items-center border-b-2 p-3 rounded mt-2 bg-purple-950 text-white"
            >
              <div>
                <h3>{todo.title}</h3>
                <p>Due Date: {todo.dueDate}</p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="p-2 bg-blue-500 text-white rounded"
                  onClick={() => handleUpdate(todo)}
                >
                  Update
                </button>
                <button
                  className="p-2 bg-red-500 text-white rounded"
                  onClick={() => handleClick(todo)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
