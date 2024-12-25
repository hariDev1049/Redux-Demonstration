import "./App.css";
import AddTodo from "./components/addTodo";
import ShowTodos from "./components/showTodos";
function App() {

  return (
    <div className="w-full h-screen bg-purple-100 px-5 py-10 flex flex-col items-center">
      <h1 className="text-center text-2xl">Redux Demonstration</h1>
      <AddTodo/>
      <ShowTodos/>
    </div>
  );
}

export default App;
