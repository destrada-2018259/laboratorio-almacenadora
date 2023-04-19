import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react"

export const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    )
    setTodos(newTodo);
    setEditTodo("");
  }

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed)
    }
  };

  return (
    <>
      <input type="checkbox" id="btn-modal" />
      <label for="btn-modal" className="lbl-modal">Abrir Modal</label>

      <div className="modal">
        <div className="contenedor">
          <header>Crear Tarea</header>
          <label for="btn-modal">X</label>
          <div className="contenido">
            <div class="mb-3">
              <h3 for="exampleFormControlInput1" class="form-label">Tarea</h3>
              <input type="text" class="form-control" id="exampleFormControlInput1"/>
            </div>
            <br />
            <div class="mb-3">
              <h3 for="exampleFormControlTextarea1" class="form-label">Descripcion</h3>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <br />
            <input class="btn btn-primary" type="submit" value="Aceptar"/>
            
          </div>
        </div>
      </div>
    </>
  )
}
