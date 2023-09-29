import {useState} from "react";
import Header from "./components/Header/Header";
import Meals from "./components/Meal/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showHandler = () => {
        setCartIsShown(true);
    }

    const hideHandler = () => {
        setCartIsShown(false);
    }

    return (
        <CartProvider>
            {cartIsShown && <Cart onHide={hideHandler}/>}
            <Header onShowHandler={showHandler}/>
            <Meals/>
        </CartProvider>
    );
}

export default App;
