import Todo from './Todo';

const Todos = ({todos}) => (
    <ul>
        {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
    </ul>
);

export default Todos;
