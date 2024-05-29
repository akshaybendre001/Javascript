// import logo from './logo.svg';
import './App.css';
import First from './Components/First';
import Welcome from './Components/Welcome';
import Second from './Components/Second';
import Api_Errors from './Components/Api_Errors';
import Api_Request from './Components/Api_Request';
import Api_Request1 from './Components/Api_Request1';
import Event from './Components/Event';
import Class_Event from './Components/Class_Event';
import FormHandling1 from './Components/FormHandling1';


function App() {
  return (
    <>
    <h1><center>Hii Welcome to world of React</center></h1>
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
      {/* <Welcome/> 
      <First/>
      <Second/> */}
      {/* <Api_Errors/> */}
      {/* <Api_Request/> */}
      {/* <Api_Request1/> */}
      {/* <Event/> */}
      {/* <Class_Event/> */}
      <FormHandling1/>
    </div>
    </>
  );
}

export default App;
