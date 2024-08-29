import { Fragment } from "react";
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'

const Modaloverlay = (props) => {
    return( <div>{props.children}</div>)
};

const portalElement = document.getElementById('root1');
const Modal = (props) =>{

    return(
        <Fragment>
            {ReactDOM.createPortal(<Modaloverlay>{props.children}</Modaloverlay>,portalElement)}

        </Fragment>
    );
}
export default Modal;