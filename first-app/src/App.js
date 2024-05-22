import logo from './logo.svg';
import './App.css';
import App1 from './Function_Components/App1';
import MyProvider from './Function_Components/Context1/MyProvider';
import Effect from './Function_Components/Effect';
import Ref1 from './Function_Components/Ref1';
import Button from './Function_Components/Button';
import Callback from './Function_Components/Callback';
// import MyComponent from './Function_Components/Context1/MyComponent';

function App() {
  return (
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
      

      {/* <App1/> 
      <Effect/>
       <MyProvider/>  */}
       <Ref1/>
       <Button/>
       <Callback/>
      {/* <MyComponent/> */}
    </div>
  );
}

export default App;
