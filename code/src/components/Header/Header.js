import React from 'react';
import styles from './Header.module.css';
import HeaderCartBtn from "./HeaderCartBtn";
import HeaderImg from "../../assets/meals.jpg";

const Header = () => {
    return (
        <div>
            <div className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartBtn/>
            </div>
            <div className={styles['main-image']}>
                <img src={HeaderImg} alt="A table full of delicious food!"/>
            </div>
        </div>
    );
}
export default Header;
