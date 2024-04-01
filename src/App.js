import logo from './logo.svg';
import { Fragment, useState } from 'react';
import './App.css';
import Frontpage from './component/Frontpage.js';
import Cart from './component/Cart';

function App() {
  const [cartIsShown, setCartIsShown]=useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
     <div>
      <Frontpage onShowCart={showCartHandler}/>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
    </div>
  );
}

export default App;
