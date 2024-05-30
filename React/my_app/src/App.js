// import logo from './logo.svg';
import './App.css';
import First from './Components/First';
import Welcome from './Components/Welcome';
import Second from './Components/Second';
import Api_Errors from './Components/Api_Errors';
import Api_Request from './Components/Api_Request';
import Api_Request1 from './Components/Api_Request1';
import Header from './Navigation/Header';
import Footer from './Navigation/Footer';

import Home from './Navigation/Home';
import Careers from './Navigation/Careers';
import About from './Navigation/About';
import {createBrowserRouter} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Routes from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import Router from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function App() {

  
  return (
    <>
    {/* <h1><center>Hii Welcome to world of React</center></h1> */}
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
      {/* <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/careers" element={<Careers/>}/>
      </Routes>
      
      <Footer/> */}
    <Header>
      <Header/>
     
    </Header>
    <main>
     <Navbar/>

     <Outlet/>
    </main>
    <footer>
      <Footer/>
    </footer>
    {/* <RouterProvider router={router}/> */}
    </div>
    </>
  );
}

export default App;
