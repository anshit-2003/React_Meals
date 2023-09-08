import classes from "./MealItem.module.css";
import cartContext from "../../Store/Context";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";

export default function MealItem({ name, price, description, id }) {
    const formatedPrice = `$${price.toFixed(2)}`;
    const context = useContext(cartContext);
    const add = (amount) => {
        amount = +amount;
        context.addItem({ id: id, name: name, price: price, amount: amount });
    };
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{formatedPrice}</div>
            </div>
            <div>
                <MealItemForm add={add} />
            </div>
        </li>
    );
}
