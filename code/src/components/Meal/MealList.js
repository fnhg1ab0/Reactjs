import styles from './MealList.module.css';
import MealItem from "./MealItem";
import Card from "../UI/Card";
import useHttp from "../hooks/use-http";
import {useEffect, useState} from "react";

const MealList = () => {
    const [meals, setMeals] = useState([]);


    const {
        isLoading,
        error,
        sendRequest: getMeals
    } = useHttp();

    const getData = {
        url: 'https://react-http-api-efe38-default-rtdb.firebaseio.com/meals.json'
    }


    const applyData = (data) => {
        // add data form Object to MealList component
        const meals = [];
        for (const key in data) {
            meals.push({
                key: key,
                ...data[key]
            });
        }
        console.log(meals);

        setMeals(meals);
    }

    useEffect(() => {
        getMeals(getData, applyData);
    }, [getMeals]);


    const list = meals.map(meal =>
        <MealItem
            key={meal.key}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    );

    let content = <p>Found no meals.</p>;

    if (list) {
        content = list;
    }

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {content}
                </ul>
            </Card>
        </section>
    );
}
export default MealList;