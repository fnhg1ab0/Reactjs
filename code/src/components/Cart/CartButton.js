import classes from './CartButton.module.css';
import {toggle} from "../../store/ui";
import {useDispatch, useSelector} from "react-redux";

const CartButton = (props) => {
    const totalItems = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const toggleCartHandler = () => {
        dispatch(toggle());
    }

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalItems}</span>
        </button>
    );
};

export default CartButton;
