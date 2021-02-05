import logo from './logo.svg';
import './App.css';
import ClassCom from './comTypes/ClassCom';
import FunCom from './comTypes/FunCom';

function App() {
  return (
    <div className="App">
      <h1>React Learning</h1>
      <ClassCom />
      <FunCom/>
    </div>
  );
}

export default App;
