import {showNotification} from "./ui";
import {replaceCart} from "./cart";

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }));
        const sendRequest = async () => {
            const response = await fetch('https://react-http-api-efe38-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cart)
            })
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
        }

        try {
            await sendRequest();

            dispatch(showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!'
            }));
        } catch (error) {
            dispatch(showNotification({
                status: 'error',
                title: 'Error!',
                message: error.message
            }));
        }
    }
}

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-http-api-efe38-default-rtdb.firebaseio.com/cart.json');
            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }
            return await response.json();
        }

        try {
            const cartData = await fetchData();
            dispatch(replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity || 0
            }));
        } catch (error) {
            dispatch(showNotification({
                status: 'error',
                title: 'Error!',
                message: error.message
            }));
        }
    }
}