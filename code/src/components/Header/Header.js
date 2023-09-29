import React, {Fragment} from 'react';
import styles from './Header.module.css';
import HeaderCartBtn from "./HeaderCartBtn";
import HeaderImg from "../../assets/meals.jpg";

const Header = (props) => {
    return (
        <Fragment>
            <div className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartBtn onShow={props.onShowHandler}/>
            </div>
            <div className={styles['main-image']}>
                <img src={HeaderImg} alt="A table full of delicious food!"/>
            </div>
        </Fragment>
    );
}
export default Header;
