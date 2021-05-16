import Header from "./components/header";
import Hero from "./components/hero";
import Home from "./components/home";
import './index.scss';

function App() {
  return (
    <div className='App container'>
     <div className='app__header'>
     <Header/>
     <Home/>
     </div>
     <Hero/>
    </div>
  );
}

export default App;
