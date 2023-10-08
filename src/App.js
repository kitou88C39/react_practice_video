import './App.css';
import { Todo } from './components/Todo';
import { TodoList } from './pages/TodoList';

function App() {
  return (
    <div className='App'>
      <Todo />
      <TodoList />
    </div>
  );
}

export default App;
