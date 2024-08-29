// import { useReducer } from "react";
import { useState, useEffect } from "react";
import CartContext from "./CartContext";
import axios from "axios";
// const defaultCartState={
//     votername:[],
//     monitorname:[],
//     totalvote:0,
// }

// const cartReducer = (state, action) => {
//     if(action.type=="Add"){
//         const updatedData= [...state.votername, {...action.newdata, id:Math.random().toString() }]
//         state.votername=updatedData;
//         return state;
//     }
//     return defaultCartState;
// }

const CartProvider = (props) => {
    //  const [cartState, setDispatchAction] = useReducer(cartReducer, defaultCartState);
     const [vName, setVoterName]=useState([]);
     const [mName, setMonitor] = useState('')
     const [email, setEmail] = useState('');
     const [token, setToken] = useState(localStorage.getItem('token'));
     const [isLoggedIn, setIsLoggedIn] = useState(false);
     const [currentUserEmail, setCurrentUserEmail] = useState('');

     useEffect(() => {
        if (token) {
            setIsLoggedIn(true);
        }
    }, [token]);
 
    const res=async() =>{ 
        const resp2=  await axios.get('https://vote-system-a6310-default-rtdb.firebaseio.com/cart.json')
        let products =Object.values(resp2.data)
        console.log(products,"from line no. 120");
        const productsKeys =Object.keys(resp2.data)
        console.log(productsKeys, "from line no. 122");
    
        products=products.map((pdata,index) =>{
          pdata.id = productsKeys[index];
          return pdata;
       })
       console.log(products ,"updated cart data");
       setVoterName(products);
      //   const resp3=await resp2.json();
      console.log(resp2, "from line no. 132");
      // }
      // res();
        }
    
      useEffect(() =>{
        //   const res=async() =>{ 
        //   const resp2=  await axios.get('https://react-http-6b09e-default-rtdb.firebaseio.com/cart.json')
        //   //  submitCartHandler(resp2)
        //   const resp3=await resp2.json();
        // console.log(resp3, "from line no. 82");
        // // }
        res();
          // }
      },[])
      
     const updateCurrentUserEmail = (email) => {
        setCurrentUserEmail(email);
    };

    // const submitCartHandler =(data) =>{
    //     setVoterName((previousData) => {
    //      return(
    //          [...previousData, vName]
    //      )
    //     })
    // }
     const logInHandler = (token) => {
        setToken(token);
        setIsLoggedIn(true);
        localStorage.setItem('token', token); // Store token in localStorage
     }

     const logOutHandler = () => {
        setIsLoggedIn(false);
        setToken(null);
        setCurrentUserEmail('');
        localStorage.removeItem('token'); // Remove token from localStorage
    };

    //  const logOutHandler = () => {
    //     setIsLoggedIn(false);
    //     setCurrentUserEmail('');
        // Remove token from localStorage or manage as needed
    // };
        // Optionally, store the token in local storage for persistence
   
    // const addVoteHandler = (data) => {
    //      setVo({type:"Add", newdata:data})
    // }

    // const deleteVoteHandler = (id) =>{
    //     setDispatchAction({type:"Remove", id:id})
    // }

    // const allData = {
    //     vname:cartState.votername,
    //     mname:cartState.monitorname,
    //     totalvote:0,
    //     AddVote:addVoteHandler,
    //     deletVote:deleteVoteHandler

    

    return(
        <CartContext.Provider value={{logOutHandler, setVoterName,logInHandler, vName,mName,isLoggedIn,currentUserEmail,updateCurrentUserEmail, setVoterName, setMonitor,email, setEmail, logInHandler, logOutHandler}}>{props.children}</CartContext.Provider>
    )
    }

export default CartProvider;