
import { Tittle } from "./Components / Tittle/Index";
import { Todo } from "./Components /Todo";
import { TodoInput } from "./Components /TodoInput/TodoInput";
import { TodoList } from "./Components /TodoList/TodoList";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Tittle />
        <TodoInput />
        <TodoList>
          <Todo /> 
          <Todo /> 
          <Todo /> 
          <Todo /> 
          <Todo /> 
        </TodoList>
      </div>
    </div>
  );
}

export default App;
