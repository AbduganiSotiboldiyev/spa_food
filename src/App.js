import React from 'react';
import './App.css';
import {Route , Switch} from "react-router-dom"
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Categories from './pages/Categories/Categories';
import Recipe from './pages/Categories/Recipe';



function App() {
  return (
    <div className="App">
      <Header/>
      <React.StrictMode>
      <div className="main_body">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
        <Route path="/categories/:name" component={Categories}/>
        <Route path="/recipe/:id" component={Recipe}/>
        <Route component={NotFound}/>
      </Switch>
      </div>

      </React.StrictMode>
      <Footer/>
    </div>
  );
}

export default App;
