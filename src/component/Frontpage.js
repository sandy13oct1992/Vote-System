// import Cart from './Cart';
// import React, {useContext, useEffect, useState} from 'react';
// import CartContext from '../store/CartContext';
// import './Frontpage.css'; // Import the CSS file for styling

// const monitorName = ["Suresh", "Deepank", "Abhik"];

// const Frontpage = (props) => {
//   const {vName, mName,email,setVoterName, setEmail, setMonitor, currentUserEmail,logOutHandler} = useContext(CartContext);
//   // const {mName} = useContext(CartContext);
//   const [voterList, setVoterList] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(()=> {
//     setVoterList([...voterList, vName]);
//   },[vName]);

// let count=voterList.length-1;

//  const handleDelete = (vonameId) =>
//   {
//     const updatedList = voterList.filter((votname) =>votname.id!==vonameId);

//     setVoterList(updatedList);
//   }

//   const handleEdit = (voname) => {
//     setVoterName(voname.votername);
//     setMonitor(voname.monitorname);
//     setEmail(voname.email);
//     handleDelete(voname.id); // Delete the current entry
//     setIsEditing(true); // Open the Cart form for editing
//     props.onShowCart(); // Ensure the cart form is displayed
//   };
   
//   console.log(voterList)
//   console.log(mName)

//   const isSuperUser = currentUserEmail === 'sandeep@gmail.com';
//   // const totalNoOfVotes = cartData.vname.length;
//   return (
//     <div>
//       {/* <ul>{voterList.votername}</ul> */}
//       <h1>Class Monitor</h1>
//       <p>Total Votes:{count}</p>
//       <button onClick={props.onShowCart}>Add new vote</button>
//       <button onClick={logOutHandler}>Logout</button> {/* Added Logout button */}

      
//       {monitorName.map((moname) => (
//         <div key={moname} className="monitor">
//           <h2>{moname}</h2>
//           <ul>total vote: {voterList.filter((voname)=>voname.monitorname===moname).length}</ul>
//           <ul>
//             {voterList.filter((voname)=>voname.monitorname===moname)
//              .map((voname) =>(
//               <li key={voname.id} className="voter">
//                 {(isSuperUser || voname.email === currentUserEmail) && (
//                     <>
//                 <span className="voter-name">{voname.votername}</span>
//                 <span className="voter-email">{voname.email}</span>
//                 </>
//                 )}
//                  {!isSuperUser && voname.email === currentUserEmail && (
//                   <>
//               <button onClick={()=> handleDelete(voname.id)} className="delete-button">delete</button>
//               <button onClick={() => handleEdit(voname)} className="edit-button">edit</button>
//               </>
//                 )}
//               </li>
//              ))
//             }
            
//           </ul>
//         </div>
//       ))}

      
//     </div>
//   );
// };

// export default Frontpage;

// import Cart from './Cart';
// import React, { useContext, useEffect, useState } from 'react';
// import CartContext from '../store/CartContext';
// import './Frontpage.css'; // Import the CSS file for styling

// const monitorName = ["Suresh", "Deepank", "Abhik"];

// const Frontpage = (props) => {
//   const { vName, mName, email, setVoterName, setEmail, setMonitor, currentUserEmail, logOutHandler } = useContext(CartContext);
//   const [voterList, setVoterList] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     setVoterList([...voterList, vName]);
//   }, [vName]);

//   let count = voterList.length - 1;

//   const handleDelete = (vonameId) => {
//     const updatedList = voterList.filter((votname) => votname.id !== vonameId);
//     setVoterList(updatedList);
//   };

//   const handleEdit = (voname) => {
//     setVoterName(voname.votername);
//     setMonitor(voname.monitorname);
//     setEmail(voname.email);
//     handleDelete(voname.id); // Delete the current entry
//     setIsEditing(true); // Open the Cart form for editing
//     props.onShowCart(); // Ensure the cart form is displayed
//   };

//   const isSuperUser = currentUserEmail === 'sandeep@gmail.com';
//   const canVote = !voterList.some(voter => voter.email === currentUserEmail);
//   return (
//     <div>
//       <h1>Class Monitor</h1>
//       <p>Total Votes: {count}</p>
//       <button onClick={props.onShowCart} disabled={!canVote}>Add new vote</button>
//       <button onClick={logOutHandler}>Logout</button>

//       {monitorName.map((moname) => (
//         <div key={moname} className="monitor">
//           <h2>{moname}</h2>
//           <ul>Total Votes: {voterList.filter((voname) => voname.monitorname === moname).length}</ul>
//           <ul>
//             {voterList.filter((voname) => voname.monitorname === moname)
//               .map((voname) => (
//                 <li key={voname.id} className="voter">
//                   {(isSuperUser || voname.email === currentUserEmail) && (
//                     <>
//                       <span className="voter-name">{voname.votername}</span>
//                       <span className="voter-email">{voname.email}</span>
//                     </>
//                   )}
//                   {!isSuperUser && voname.email === currentUserEmail && (
//                     <>
//                       <button onClick={() => handleDelete(voname.id)} className="delete-button">Delete</button>
//                       <button onClick={() => handleEdit(voname)} className="edit-button">Edit</button>
//                     </>
//                   )}
//                 </li>
//               ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Frontpage;

import Cart from './Cart';
import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../store/CartContext';
import './Frontpage.css'; // Import the CSS file for styling
import axios from 'axios';

const monitorName = ["Suresh", "Deepank", "Abhik"];

const Frontpage = (props) => {
  const { vName, mName, email,setVoterName , setEmail, setMonitor, currentUserEmail, logOutHandler } = useContext(CartContext);
  const [voterList, setVoterList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  // useEffect(() => {
  //   setVoterList([...voterList, vName]);
  // }, []);
  // const addVote = () => {
  //   // setVoterList(vName);
  //   setVoterList(prevVoterList => [...prevVoterList, vName]);
  //   props.onShowCart();
  // }

  let count = vName.length ;
console.log(vName.length,"from lione no. 180");
  const handleDelete = async(vonameId) => {
    // const updatedList = vName.filter((votname) => votname.id !== vonameId);
    // setVoterList(updatedList);
    console.log(vName, " line no 184")
    // try {
      await axios.delete(`https://vote-system-a6310-default-rtdb.firebaseio.com/cart/${vonameId}.json`);
      const updatedList = vName.filter((votname) => votname.id !== vonameId);
      setVoterName(updatedList);
    // } catch (error) {
    //   console.error('Error deleting entry:', error);
    // }

  };

  const handleEdit = (voname) => {
    // setVoterName(voname.votername);
    // setMonitor(voname.monitorname);
    setEmail(voname.email);
    handleDelete(voname.id); // Delete the current entry
    setIsEditing(true); // Open the Cart form for editing
    props.onShowCart(); // Ensure the cart form is displayed
  };

  const isSuperUser = currentUserEmail === 'sandeep@gmail.com';
  // const canVote = !vName.some(voter => voter.email === currentUserEmail);
  const canVote = Array.isArray(vName) && !vName.some(voter => voter.email === currentUserEmail);
  // console.log(voterList);
  return (
    <div>
      <h1>Class Monitor</h1>
      <p>Total Votes: {count}</p>
      <button onClick={props.onShowCart} disabled={!canVote} >Add new vote</button>
      <button onClick={logOutHandler}>Logout</button>

      {monitorName.map((moname) => (
        <div key={moname} className="monitor">
          <h2>{moname}</h2>
          <ul>Total Votes: {vName.filter((voname) => voname.monitorname === moname).length}</ul>
          {/* <ul>Total Votes: {Array.isArray(vName) ? vName.filter((voname) => voname.monitorname === moname).length : 0}</ul> */}
          <ul>
            {/* {Array.isArray(vName) && vName.filter((voname) => voname.monitorname === moname) */}
            {vName.filter((voname) => voname.monitorname === moname)

              .map((voname) => (
                <li key={voname.id} className="voter">
                  {(isSuperUser || voname.email === currentUserEmail) && (
                    <>
                      <span className="voter-name">{voname.votername}</span>
                     { console.log(voname,isSuperUser,"line no.229")}
                      <span className="voter-email">{voname.email}</span>
                    </> 
                    )} 
                  {!isSuperUser && voname.email === currentUserEmail && (
                     <>
                      <button onClick={() => handleDelete(voname.id)} className="delete-button">Delete</button>
                      <button onClick={() => handleEdit(voname)} className="edit-button">Edit</button>
                    </>
                   )} 
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Frontpage;

// import React, { useContext, useEffect, useState } from 'react';
// import CartContext from '../store/CartContext';
// import './Frontpage.css'; // Import the CSS file for styling

// const monitorName = ["Suresh", "Deepank", "Abhik"];

// const Frontpage = (props) => {
//   const { vName, mName, email, setVoterName, setEmail, setMonitor, currentUserEmail, logOutHandler } = useContext(CartContext);
//   const [voterList, setVoterList] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     if (vName && !voterList.some(voter => voter.id === vName.id)) {
//       setVoterList(prevVoterList => [...prevVoterList, vName]);
//     }
//   }, [vName]);

//   let count = voterList.length;

//   const handleDelete = (vonameId) => {
//     const updatedList = voterList.filter((votname) => votname.id !== vonameId);
//     setVoterList(updatedList);
//   };

//   const handleEdit = (voname) => {
//     setVoterName(voname.votername);
//     setMonitor(voname.monitorname);
//     setEmail(voname.email);
//     handleDelete(voname.id); // Delete the current entry
//     setIsEditing(true); // Open the Cart form for editing
//     props.onShowCart(); // Ensure the cart form is displayed
//   };

//   const isSuperUser = currentUserEmail === 'sandeep@gmail.com';
//   const canVote = !voterList.some(voter => voter.email === currentUserEmail);

//   return (
//     <div>
//       <h1>Class Monitor</h1>
//       <p>Total Votes: {count}</p>
//       <button onClick={props.onShowCart} disabled={!canVote}>Add new vote</button>
//       <button onClick={logOutHandler}>Logout</button>

//       {monitorName.map((moname) => (
//         <div key={moname} className="monitor">
//           <h2>{moname}</h2>
//           <ul>Total Votes: {voterList.filter((voname) => voname.monitorname === moname).length}</ul>
//           <ul>
//             {voterList.filter((voname) => voname.monitorname === moname || isSuperUser)
//               .map((voname) => (
//                 <li key={voname.id} className="voter">
//                   <span className="voter-name">{voname.votername}</span>
//                   <span className="voter-email">{voname.email}</span>
//                   {voname.email === currentUserEmail && (
//                     <>
//                       <button onClick={() => handleDelete(voname.id)} className="delete-button">Delete</button>
//                       <button onClick={() => handleEdit(voname)} className="edit-button">Edit</button>
//                     </>
//                   )}
//                 </li>
//               ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Frontpage;
