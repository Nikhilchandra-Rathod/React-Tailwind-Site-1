import { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/index';
import About from './pages/about';
import Menu from './pages/menu';
import Contact from './pages/contact';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={handleToggle} />
      <Dropdown isOpen={isOpen} toggle={handleToggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/menu' component={Menu} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
