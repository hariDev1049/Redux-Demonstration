import { useEffect, useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { addTodo } from "../store/todoSlice";

function AddTodo() {
  const [todo, setTodo] = useState({ title: "", dueDate: "" });
  const selectedTodo = useSelector((state) => state.selectedTodo);
  const dispatch = useDispatch(); 

  useEffect(() => {
  if(selectedTodo) {
    setTodo({
      title: selectedTodo.title,
      dueDate: selectedTodo.dueDate,
    });
  }
}, [selectedTodo]);

  const resetTodo = () => {
    setTodo({
      title: "",
      dueDate: "",
    });
}
  const handleSubmit = (e) => {
    e.preventDefault();
    if(todo.title === "" || todo.dueDate === "") return;
    dispatch(addTodo(todo));
    resetTodo();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-5 flex gap-4">
        <input
          className="p-3 rounded"
          type="text"
          placeholder="Enter a todo"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <input
          className="p-3 rounded"
          type="date"
          value={todo.dueDate}
          onChange={(e) => setTodo({ ...todo, dueDate: e.target.value })}
        />
        <button className="p-3 rounded bg-purple-950 text-white" type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
