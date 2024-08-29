// //React Code
// import React, { useContext, useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import './Cart.css';
// import CartContext from '../store/CartContext';

// const monitorName = ["Suresh", "Deepank", "Abhik"];
// let id;
// const Cart = props => {
//     const [monitorname, setMonitorName] = useState('');
//     const [votername, setVoterName1] = useState();
    

//     const {setVoterName} = useContext(CartContext);
//     const {setMonitor, email} = useContext(CartContext);

//     const VoterNameHandler = (e) => {
//         setVoterName1(e.target.value);
//     }

//     const NameChangeHandler = (e) => {
//         setMonitorName(e.target.value);
//     };
    
    

//     const HandleSubmit = (e) => {
//         e.preventDefault();
        
//         const voterObj = {
//             votername:votername,
//             monitorname:monitorname,
//             email:email,
//             id:new Date().getTime(),
//         }
        
    
//         // setAllVoter([...allVoter,newVoter]);
        
//         setVoterName(voterObj);
//         setMonitor(monitorname)
//         props.onClose();
    
//     };

//     //    const addToHomePage = () =>{
//     //     cartCtx.AddVote({
//     //     moname:monitorname,
//     //     vname:votername
//     //     })
    

//     return ReactDOM.createPortal(
//         <>
          

//             <div className="CContainer">
//                 <div className="Cart-Box">
//                     {/* <form onSubmit={HandleSubmit}> */}
//                         <div>Student Name</div>
//                         <input type="text" value={votername} onChange={VoterNameHandler} />
//                         <select id="Mname" value={monitorname} onChange={NameChangeHandler}>
//                             <option value="">Select Name</option>
//                             {monitorName.map((Mname) => (
//                                 <option key={Mname} value={Mname}>{Mname}</option>
//                             ))}

//                         </select>
//                         <button onClick={HandleSubmit} >Vote</button>
//                         <button onClick={props.onClose}>X</button>
//                     {/* </form> */}
//                 </div>
//             </div>
//         </>, document.getElementById("root1")
//     );
// }
// export default Cart;

import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './Cart.css';
import CartContext from '../store/CartContext';
import axios from 'axios';

const monitorName = ["Suresh", "Deepank", "Abhik"];

const Cart = props => {
  const [monitorname, setMonitorName] = useState('');
  const [votername, setVoterName1] = useState('');

  const { setVoterName, setMonitor,submitCartHandler, email } = useContext(CartContext);

  const VoterNameHandler = (e) => {
    setVoterName1(e.target.value);
  }

  const NameChangeHandler = (e) => {
    setMonitorName(e.target.value);
  };

  const HandleSubmit = async(e) => {
    e.preventDefault();

    const voterObj = {
      votername: votername,
      monitorname: monitorname,
      email: email,
      id: new Date().getTime(),
    }
     const response = await axios.post('https://vote-system-a6310-default-rtdb.firebaseio.com/cart.json',
      voterObj
     )
     setVoterName((pre)=>[...pre, voterObj]);
    setMonitor(monitorname);
    props.onClose();
  };

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

  return ReactDOM.createPortal(
    <>
      <div className="CContainer">
        <div className="Cart-Box">
          <div>Student Name</div>
          <input type="text" value={votername} onChange={VoterNameHandler} />
          <select id="Mname" value={monitorname} onChange={NameChangeHandler}>
            <option value="">Select Name</option>
            {monitorName.map((Mname) => (
              <option key={Mname} value={Mname}>{Mname}</option>
            ))}
          </select>
          <button onClick={HandleSubmit}>Vote</button>
          <button onClick={props.onClose}>X</button>
        </div>
      </div>
    </>, document.getElementById("root1")
  );
}

export default Cart;
