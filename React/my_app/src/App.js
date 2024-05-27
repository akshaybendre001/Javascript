// import logo from './logo.svg';
import './App.css';
import First from './Components/First';
import Welcome from './Components/Welcome';
import Second from './Components/Second';

function App() {
  return (
    <>
    <h1>Hii Welcome to world of React</h1>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Welcome/> 
      <First/>
      <Second/>
    </div>
    </>
  );
}

export default App;
