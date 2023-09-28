import styles from './CartFooterModal.module.css';

const CartFooterModal = (props) => {
    return (
        <>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>
                    Close
                </button>
                <button className={styles.button}>Order</button>
            </div>
        </>
    );
}
export default CartFooterModal;