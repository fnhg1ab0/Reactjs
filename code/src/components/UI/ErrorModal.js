import style from './ErrorModal.module.css';
import Card from './Card';
import Button from "./Button";

const ErrorModal = (props) => {
    return(
        <div>
            <div className={style.backdrop} onClick={props.onResetErr}/>

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
        </div>
    );
}
export default ErrorModal;