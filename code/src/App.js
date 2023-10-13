import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Notification from "./components/UI/Notification";
import {fetchCartData, sendCartData} from "./store/cart-action";

let check = true;

function App() {
    const dispatch = useDispatch();
    const isCartVisible = useSelector(state => state.ui.isToggle);
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.ui.notification);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (check) {
            check = false;
            return;
        }
        if (cart.changed) {
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch]);

    return (
        <>
            {notification &&
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            }
            <Layout>
                {isCartVisible && <Cart/>}
                <Products/>
            </Layout>
        </>
    );
}

export default App;
