import styles from './ModalCart.module.css';
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onClose}/>
    );
}

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            {props.children}
        </div>
    );
}

const ModalCart = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('backdrop'))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlay'))}
        </>
    );
}
export default ModalCart;