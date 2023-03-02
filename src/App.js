import './App.css';
import Form from './Form';
import Table from './Table';
import Modal from './Modal';
import { useSelector } from 'react-redux';

function App() {
  const todo = useSelector((state)=>state.todos)
  return (
    <div className="App">
      <Form/>
      <Table/>
      {todo.popup.isOpen?<Modal todo={todo.popup.todo}/>:null}
    </div>
  );
}

export default App;
