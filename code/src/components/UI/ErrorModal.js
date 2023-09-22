import style from './ErrorModal.module.css';
import Card from './Card';
import Button from "./Button";
import {Fragment} from "react";
import ReactDOM from "react-dom";

// use ReactDom.createPortal() to render the modal in the root div
const Backdrop = (props) => {
    return <div className={style.backdrop} onClick={props.onResetErr}/>
}

const ModalOverlay = (props) => {
    return(
        <Card className={style.modal}>
            <header className={style.header}>
                <h2>{props.valueErr.title}</h2>
            </header>
            <div className={style.content}>
                <p>{props.valueErr.message}</p>
            </div>
            <footer className={style.actions}>
                <Button onClick={props.onResetErr}>Okay</Button>
            </footer>
        </Card>
    );
}


// use React.Fragment instead of div
// React.Fragment is a built-in component that allows us to group a list of children without adding extra nodes to the DOM.
const ErrorModal = (props) => {
    return(
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onResetErr={props.onResetErr}/>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    valueErr={props.valueErr}
                    onResetErr={props.onResetErr}
                />,
                document.getElementById('overlay-root')
            )}
        </Fragment>
    );
}
export default ErrorModal;