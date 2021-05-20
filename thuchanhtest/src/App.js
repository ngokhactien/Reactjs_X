import React from 'react';

import './App.css';


import { BrowserRouter as Router, Route , Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from './components/TopMenu' ;
import product from './pages/product' ;

import {CarttProvider} from './context/Cart' ;
//cách 1
// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }
//cách 2
const Home = () => <h2>Home</h2> ;
// const Product = () => <h2>Product</h2> ;

function App() {
  return (
    <CarttProvider>
      <Router>
        <div className="App"> 
        <TopMenu />
          {/*  có link */}    
            {/* <ul>
              <li>
                <Link to="/home">Home</Link>
              </li> 
              <li>
                <Link to="/product">Product</Link>
              </li>
              
            </ul> */}
        

            <Route exact path="/Home" component={Home} />
            <Route  path="/product" component={product} />
          
        </div>
      </Router>
      </CarttProvider>  
  );
}

export default App;
