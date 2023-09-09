import classes from "./CartItem.module.css";

const CartItem = ({ amount, Remove, Add, name, price }) => {
    const fixedPrice = `$${price.toFixed(2)}`;

    return (
        <li className={classes["cart-item"]}>
            <div>
                <h2>{name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{fixedPrice}</span>
                    <span className={classes.amount}>x {amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={Remove}>−</button>
                <button onClick={Add}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
