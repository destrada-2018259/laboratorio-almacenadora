import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react"

export const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

  const [task, setTask] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [name, setName] = useState();

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

  const onInputChange = (event, type) => {
    switch (type) {
      case 'task':
        setTask(event.target.value);
        break;
      case 'startDate':
        setStartDate(event.target.value);
        break;
      case 'endDate':
        setEndDate(event.target.value);
        break;
      case 'name':
        setName(event.target.value);
        break;



    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {

      setTodos([...todos, { id: uuidv4(), title: task, startDate: startDate, endDate: endDate, name: name}]);
      setInput(" ");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed)
    }
  };


  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Tarea" className="task-input" value={task} required onChange={event => onInputChange(event, 'task')} />
        <input type="text" placeholder="fecha inicio" className="task-input" value={startDate} required onChange={event => onInputChange(event, 'startDate')} />
        <input type="text" placeholder="fecha inicio" className="task-input" value={endDate} required onChange={event => onInputChange(event, 'endDate')} />
        <input type="text" placeholder="Persona" className="task-input" value={name} required onChange={event => onInputChange(event, 'name')} />
        <button className="button-add" type="submit">
          {editTodo ? "OK" : "Add"}
        </button>
      </form>

    </>
  )
}
