// import logo from './logo.svg';
import './App.css';
import First from './Components/First';
import Welcome from './Components/Welcome';
import Second from './Components/Second';
import Api_Errors from './Components/Api_Errors';
import Api_Request from './Components/Api_Request';
import Api_Request1 from './Components/Api_Request1';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Users from './Components/Users';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
// import Routes from 'react-router-dom';
// import Route from 'react-router-dom';

function App() {

  // let users = [
  //   {id:1, name:"Anil", Address:"Pune"},
  //   {id:2, name:"peter", Address:"Mumbai"},
  //   {id:3, name:"Akshay", Address:"Pune"},
  //   {id:1, name:"Amit", Address:"Pune"},
  //   {id:2, name:"Aman", Address:"Mumbai"},
  //   {id:3, name:"Shraddha", Address:"Pune"}
  // ];
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
      {/* <Home/>
      <About/>
      <Contact/>
      <Users/> */}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/users/:name' element={<Users/>}/>
        
      </Routes>

        
      <Navbar/>
        

    </div>
    </>
  );
}

export default App;

