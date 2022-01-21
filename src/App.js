import FilterButton from './components/FilterButton';
import Todo from './components/Todo'
import Form from './components/Form';
function App(props) {
  const taskList = props.tasks.map(task => (
    <Todo 
      id={task.Id}
      name={task.Name}
      completed={task.completed}
      key={task.Id}
    />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
          {taskList}
      </ul>
    </div>
  );
}

export default App;
