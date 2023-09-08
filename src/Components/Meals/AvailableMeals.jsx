import { useEffect } from "react";
import Card from "../UI/Card";
import axios from "axios";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import { useState } from "react";

export default function AvailableMeals() {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        async function fetchMeals() {
            try {
                const response = await axios.get(
                    "https://react-meals-7a8d7-default-rtdb.firebaseio.com/Meals.json"
                );
                const data = response.data;
                for (const key in data) {
                    const meal = {
                        id: key,
                        name: data[key].name,
                        description: data[key].description,
                        price: data[key].price,
                    };
                    setMeals((prevMeals) => [...prevMeals, meal]);
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchMeals();
    }, []);
    const mealList = meals.map((meal) => <MealItem key={meal.id} {...meal} />);
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealList}</ul>
            </Card>
        </section>
    );
}
