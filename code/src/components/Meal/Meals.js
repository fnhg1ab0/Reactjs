import {Fragment} from "react";
import MealInfo from "./MealInfo";
import MealList from "./MealList";

const Meals = () => {
    return (
        <Fragment>
            <MealInfo/>
            <MealList/>
        </Fragment>
    );
}
export default Meals;