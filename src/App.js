import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setToods] = useState(['Tale dogs for a walk', 'Tale the rubbish out']);

  return (
    <div className="App">
     <h1>Hello Clever Programmers</h1>
     <input />
     <button>Add Todo</button>

     <ul>
       {todos.map(todo => (
         <li>{todo}</li>
       ))}
     </ul>

    </div>
  );
}

export default App;
