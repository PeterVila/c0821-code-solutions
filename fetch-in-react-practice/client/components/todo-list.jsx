import React from 'react';

function Todo(props) {
  const { todoId, task, isCompleted } = props.todo;
  const idAttr = `todo-item-${todoId}`;
  const taskClass = isCompleted
    ? 'form-check-label is-completed'
    : 'form-check-label';
  return (
    <li className="list-group-item">
      <div className="form-check">
        <div>
          <input
          id={idAttr}
          type="checkbox"
          checked={isCompleted}
          className="form-check-input mr-2"
          onChange={() => props.toggleCompleted(todoId)}/>
          <label className={taskClass} htmlFor={idAttr}>
          { task }
          </label>
        </div>
        <button
        id={idAttr}
        onClick={() => props.deleteButton(todoId)}>DELETE</button>
      </div>
    </li>
  );
}

function TodoList(props) {
  return (
    <ul className="list-group shadow-sm">
      {
        props.todos.map(todo => {
          return (
            <Todo
              key={todo.todoId}
              todo={todo}
              toggleCompleted={props.toggleCompleted}
              deleteButton={props.deleteButton}
              />
          );
        })
      }
    </ul>
  );
}

export default TodoList;
