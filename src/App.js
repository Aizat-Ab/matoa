import React from 'react';
import Home from "./components/home";
import './index.scss';
import { Route } from 'react-router-dom'
import Tabs from './pages/tabs';
import Footer from './components/footer';

function App() { 
  return (
    <div>
    <div className='App'>
     <div className='app__header'>
     </div>
     <Route exact path="/" component={Home}/>
     <Route exact path="/way" component={Tabs}/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
