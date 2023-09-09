import Card from "../UI/Card";
import axios from "axios";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import { useState, useEffect } from "react";

export default function AvailableMeals() {
    const [meals, setMeals] = useState([]);
    const [isLoading, setisLoding] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function fetchMeals() {
            try {
                const response = await axios.get(
                    "https://react-meals-7a8d7-default-rtdb.firebaseio.com/Meals.json"
                );
                if (!response.data) {
                    throw new Error("Something went wrong!");
                }
                const data = response.data;
                for (const key in data) {
                    const meal = {
                        id: key,
                        name: data[key].name,
                        description: data[key].description,
                        price: data[key].price,
                    };
                    setMeals((prevMeals) => [...prevMeals, meal]);
                    setisLoding(false);
                }
            } catch (error) {
                setError(error.message);
                setisLoding(false);
            }
        }
        fetchMeals();
    }, []);
    if (error) {
        return (
            <section className={classes.MealsError}>
                <p>{error}</p>
            </section>
        );
    }
    if (isLoading) {
        return (
            <section className={classes.MealsLoading}>
                <p>Loading...</p>
            </section>
        );
    }
    const mealList = meals.map((meal) => <MealItem key={meal.id} {...meal} />);
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealList}</ul>
            </Card>
        </section>
    );
}
