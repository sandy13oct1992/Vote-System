//React Code
import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './Cart.css';
import CartContext from '../store/CartContext';

const monitorName = ["Suresh", "Deepank", "Abhik"];
let id;
const Cart = props => {
    const [monitorname, setMonitorName] = useState('');
    const [votername, setVoterName1] = useState();
    

    const {setVoterName} = useContext(CartContext);
    const {setMonitor} = useContext(CartContext);

    const VoterNameHandler = (e) => {
        setVoterName1(e.target.value);
    }

    const NameChangeHandler = (e) => {
        setMonitorName(e.target.value);
    };
    

    const HandleSubmit = (e) => {
        e.preventDefault();
        
        const voterObj = {
            votername:votername,
            monitorname:monitorname,
            id:new Date().getTime(),
        }
        
    
        // setAllVoter([...allVoter,newVoter]);
        
        setVoterName(voterObj);
        setMonitor(monitorname)
        props.onClose();
    
    };

    //    const addToHomePage = () =>{
    //     cartCtx.AddVote({
    //     moname:monitorname,
    //     vname:votername
    //     })
    

    return ReactDOM.createPortal(
        <>
          

            <div className="CContainer">
                <div className="Cart-Box">
                    {/* <form onSubmit={HandleSubmit}> */}
                        <div>Student Name</div>
                        <input type="text" value={votername} onChange={VoterNameHandler} />
                        <select id="Mname" value={monitorname} onChange={NameChangeHandler}>
                            <option value="">Select Name</option>
                            {monitorName.map((Mname) => (
                                <option key={Mname} value={Mname}>{Mname}</option>
                            ))}

                        </select>
                        <button onClick={HandleSubmit} >Vote</button>
                        <button onClick={props.onClose}>X</button>
                    {/* </form> */}
                </div>
            </div>
        </>, document.getElementById("root1")
    );
}
export default Cart;