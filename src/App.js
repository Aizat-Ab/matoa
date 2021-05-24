import React from 'react';
import Header from "./components/header";
import Home from "./components/home";
import './index.scss';
import { Route } from 'react-router-dom'
import Tabs from './pages/tabs';
import Footer from './components/footer';

function App() { 
  return (
    <div className='App container'>
     <div className='app__header'>
     <Header/>
     </div>
     <Route exact path="/" component={Home}/>
     <Route exact path="/way" component={Tabs}/>
     <Footer/>
    </div>
  );
}

export default App;
