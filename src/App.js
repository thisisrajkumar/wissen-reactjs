import logo from './logo.svg';
import './App.css';
import ClassCom from './comTypes/ClassCom';
import FunCom from './comTypes/FunCom';
import HeaderCom from './header';

function App() {
  return (
    <div className="App">
      <HeaderCom />
      <h1>React Learning</h1>
      <ClassCom />
      <FunCom />
    </div>
  );
}

export default App;
