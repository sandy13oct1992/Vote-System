// import logo from './logo.svg';
// import { Fragment, useState, useContext } from 'react';
// import './App.css';
// import Frontpage from './component/Frontpage.js';
// import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import Cart from './component/Cart';
// import AuthForm from './component/AuthForm.js';
// import CartContext from './store/CartContext.js';

// function App() {
//   const [cartIsShown, setCartIsShown] = useState(false);

//   const authCtx = useContext(CartContext);

//   const showCartHandler = () => {
//     setCartIsShown(true);
//   }

//   const hideCartHandler = () => {
//     setCartIsShown(false);
//   }

//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact>
//           {!authCtx.isLoggedIn && <AuthForm />}
//           {authCtx.isLoggedIn && (
//             <Fragment>
//               <Frontpage onShowCart={showCartHandler} />
//               {cartIsShown && <Cart onClose={hideCartHandler} />}
//             </Fragment>
//           )}
//         </Route>
//         <Route path="/frontpage">
//           {authCtx.isLoggedIn && (
//             <Fragment>
//               <Frontpage onShowCart={showCartHandler} />
//               {cartIsShown && <Cart onClose={hideCartHandler} />}
//             </Fragment>
//           )}
//           {!authCtx.isLoggedIn && <Redirect to="/" />}
//         </Route>
//         <Redirect to="/" />
//       </Switch>
//     </Router>
//   );
// }

// export default App;
import logo from './logo.svg';
import { Fragment, useState, useContext } from 'react';
import './App.css';
import Frontpage from './component/Frontpage.js';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Cart from './component/Cart';
import AuthForm from './component/AuthForm.js';
import CartContext from './store/CartContext.js';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const authCtx = useContext(CartContext);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={!authCtx.isLoggedIn ? <AuthForm /> : <Navigate to="/frontpage" />} />
        <Route 
          path="/frontpage" 
          element={
            authCtx.isLoggedIn ? (
              <Fragment>
                <Frontpage onShowCart={showCartHandler} />
                {cartIsShown && <Cart onClose={hideCartHandler} />}
              </Fragment>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
