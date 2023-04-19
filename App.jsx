import { useEffect, useState } from "react"
import { Header } from "./src/components/Header"
import { Form   } from "./src/components/Form"
import { TodosList } from "./src/components/TodosList"


export const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];  
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);    
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
        <div className="app-wrapper">
            <div>
                <Header />
            </div>
            <div>
                <Form 
                    input={input}
                    setInput={setInput}
                    todos={todos}
                    setTodos={setTodos}
                    editTodo={editTodo}
                    setEditTodo={setEditTodo}
                />
            </div>
            <div>
            
            </div>
            <div>
                <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
            </div>
        </div>
    </div> 
  )
}
