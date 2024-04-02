// import { useReducer } from "react";
import { useState } from "react";
import CartContext from "./CartContext";

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
     const [vName, setVoterName]=useState('');
     const [mName, setMonitor] = useState('')
    
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
        <CartContext.Provider value={{vName,mName, setVoterName, setMonitor}}>{props.children}</CartContext.Provider>
    )
    }

export default CartProvider;