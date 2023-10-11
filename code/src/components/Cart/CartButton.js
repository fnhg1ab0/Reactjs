import classes from './CartButton.module.css';
import {toggle} from "../../store/ui";
import {useDispatch} from "react-redux";

const CartButton = (props) => {
    const dispatch = useDispatch();

    const toggleCartHandler = () => {
        dispatch(toggle());
    }

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    );
};

export default CartButton;
