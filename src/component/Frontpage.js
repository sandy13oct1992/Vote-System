import Cart from './Cart';
import React, {useContext, useEffect, useState} from 'react';
import CartContext from '../store/CartContext';

const monitorName = ["Suresh", "Deepank", "Abhik"];

const Frontpage = (props) => {
  const {vName, mName} = useContext(CartContext);
  // const {mName} = useContext(CartContext);
  const [voterList, setVoterList] = useState([]);
 
  useEffect(()=> {
    setVoterList([...voterList, vName]);
  },[vName]);

let count=voterList.length-1;

 const handleDelete = (vonameId) =>
  {
    const updatedList = voterList.filter((votname) =>votname.id!==vonameId);

    setVoterList(updatedList);
  }
   
  console.log(voterList)
  console.log(mName)
  // const totalNoOfVotes = cartData.vname.length;
  return (
    <div>
      {/* <ul>{voterList.votername}</ul> */}
      <h1>Class Monitor</h1>
      <p>Total Votes:{count}</p>
      <button onClick={props.onShowCart}>Add new vote</button>
      

      
      {monitorName.map((moname) => (
        <div key={moname}>
          <h2>{moname}</h2>
          <ul>total vote: {voterList.filter((voname)=>voname.monitorname===moname).length}</ul>
          <ul>
            {voterList.filter((voname)=>voname.monitorname===moname)
             .map((voname) =>(
              <li key={voname.id}>
                
              {voname.votername}
              
              <button onClick={()=> handleDelete(voname.id)}>delete</button>
              </li>
             ))
            }
            
          </ul>
        </div>
      ))}

      
    </div>
  );
};

export default Frontpage;