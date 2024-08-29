// import { useState, useRef, useContext } from "react"; 
// import CartContext from "../store/CartContext";

// const AuthForm = () => {
//     const emailInputRef = useRef();
//     const passInputRef = useRef();
//     const [isLogin, setIsLogin] = useState(true);
//     const [error, setError] = useState('');

//     const authCtx = useContext(CartContext);

//     const switchAuthModeHandler = () => {
//         setIsLogin((prevState) => !prevState);
//         setError(''); // Clear error on mode switch    
       
//     };

//     const submitHandler = async (event) => {
//         event.preventDefault();

//         const email = emailInputRef.current.value;
//         const password = passInputRef.current.value;

//         let url;
//         if (isLogin) {
//             url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= AIzaSyBal4zHxt0IZzffcTY5anxJAUimCBRkkrk';
//         } else {
//             url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= AIzaSyBal4zHxt0IZzffcTY5anxJAUimCBRkkrk';
//         }

//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     email: email,
//                     password: password,
//                     returnSecureToken: true
//                 }),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });

//             const data = await response.json();

//             if (!response.ok) {
//                 let errorMessage = 'Authentication failed!';
//                 if (data && data.error && data.error.message) {
//                     errorMessage = data.error.message;
//                 }
//                 throw new Error(errorMessage);
//             }

//             authCtx.logInHandler(data.idToken);
//             authCtx.setEmail(email);
        
//             authCtx.updateCurrentUserEmail(email);
//             setError(''); // Clear error on successful login/signup
//         } catch (err) {
//             setError(err.message);
//         }
//     };

//     return (
//         <div>
//             <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
//             <form onSubmit={submitHandler}>
//                 <div>
//                     <label htmlFor='email'>Email ID</label>
//                     <input type='email' id='email' required ref={emailInputRef} />
//                 </div>
//                 <div>
//                     <label htmlFor='password'>Password</label>
//                     <input type='password' id='password' required ref={passInputRef} />
//                 </div>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <div>
//                     <button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>
//                     <button type='button' onClick={switchAuthModeHandler}>
//                         {isLogin ? 'Create new account' : 'Login with existing account'}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default AuthForm;

import { useState, useRef, useContext } from "react";
import CartContext from "../store/CartContext";
import './AuthForm.css'; // Import the CSS file

const AuthForm = () => {
  const emailInputRef = useRef();
  const passInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const authCtx = useContext(CartContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    setError(''); // Clear error on mode switch    
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passInputRef.current.value;

    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBal4zHxt0IZzffcTY5anxJAUimCBRkkrk';
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBal4zHxt0IZzffcTY5anxJAUimCBRkkrk';
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      if (!response.ok) {
        let errorMessage = 'Authentication failed!';
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }

      authCtx.logInHandler(data.idToken);
      authCtx.setEmail(email);

      authCtx.updateCurrentUserEmail(email);
      setError(''); // Clear error on successful login/signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='email'>Email ID</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' required ref={passInputRef} />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="button-group">
          <button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>
          <button type='button' className="switch-button" onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
