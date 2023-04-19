

export const TodosList = ({ todos, setTodos, setEditTodo }) => {

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }
        }
        return item;
      })
    )
  }

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  }

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <table className="table">
        <tbody>
              
          {todos.map((todo) => (
            <li className="list-item" key={todo.id}>
              <tr >
                <td scope="row" className={`list ${todo.completed ? "complete" : ""}`}>{todo.title}</td>
                <td scope="row" className={`list ${todo.completed ? "complete" : ""}`}>Otto</td>
                <td scope="row" className={`list ${todo.completed ? "complete" : ""}`}>@mdo</td>
                <td scope="row" className={`list ${todo.completed ? "complete" : ""}`}>ddsfaf</td>
                <td className={`list ${todo.completed ? "complete" : ""}`}>dfasfd</td>
              </tr>
              <div>
                <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                  <i className="fa fa-check-circle"></i>
                </button>
                <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                  <i className="fa fa-edit"></i>
                </button>
                <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </li>
          ))}

        </tbody>
      </table>
    </div>
  )
}