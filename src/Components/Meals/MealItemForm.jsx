import { useState } from "react";
import classes from "./MealItemForm.module.css";

export default function MealItemForm({ add }) {
    const submitHandler = (event) => {
        event.preventDefault();
        add(amount);
    };
    const [amount, setAmount] = useState(1);

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes.input}>
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    id="amount"
                    min="1"
                    onChange={(event) => setAmount(event.target.value)}
                    max="5"
                    step="1"
                    value={amount}
                />
            </div>
            <button>Add!</button>
        </form>
    );
}
