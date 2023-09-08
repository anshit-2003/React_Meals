import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = ({showCartHandler}) => {
    return <div onClick={showCartHandler} className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlays");

const Modal = ({showCartHandler, children}) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop showCartHandler={showCartHandler} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{children}</ModalOverlay>,
                portalElement
            )}
        </>
    );
};

export default Modal;
