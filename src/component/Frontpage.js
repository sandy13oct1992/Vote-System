import Cart from './Cart';
import React, {useContext} from 'react';
import CartContext from '../store/CartContext';

const monitorName = ["Suresh", "Deepak", "Abhik"];

const Frontpage = (props) => {
  const {vName, mName} = useContext(CartContext);
  // const {mName} = useContext(CartContext);
  console.log(vName);
  console.log(mName)
  // const totalNoOfVotes = cartData.vname.length;
  return (
    <div>
      <li>{vName.allVoter}</li>
      <h1>Class Monitor</h1>
      <p>Total Votes:{}</p>
      <button onClick={props.onShowCart}>Add new vote</button>
      

      
      {monitorName.map((moname) => (
        <div key={moname}>
          <h2>{moname}</h2>
        </div>
      ))}
    </div>
  );
};

export default Frontpage;