import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import cartContext from "../../Store/Context";

export default function HeaderCartButton({ showCartHandler }) {
    const context = useContext(cartContext);
    const numberOfItems = context.items.reduce(
        (currentNumber, item) => (currentNumber + item.amount),
        0
    );
    const btnClasses = `${classes.button} ${classes.bump}}`

    return (
        <button className={btnClasses} onClick={showCartHandler}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart!</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    );
}
