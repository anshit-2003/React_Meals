import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import Checkout from "./Checkout";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import cartContext from "../../Store/Context";

export default function Cart({ showCartHandler }) {
    const context = useContext(cartContext);
    const [isOrdering, setisOrdering] = useState(false);
    const totalAmount = context.totalAmount.toFixed(2);
    const hasItems = context.items.length > 0;
    const cartItemRemoveHandler = (id) => {
        context.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        context.addItem({ ...item, amount: 1 });
    };
    const cancelHandler = () => {
        setisOrdering(false);
    };
    const cartItems = (
        <ul className={classes["cart-items"]}>
            {context.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    Remove={() => cartItemRemoveHandler(item.id)}
                    Add={() => cartItemAddHandler(item)}
                />
            ))}
        </ul>
    );
    return (
        <Modal showCartHandler={showCartHandler}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount : </span>
                <span>${totalAmount}</span>
            </div>
            {isOrdering && (
                <Checkout
                    onCancel={cancelHandler}
                    showCartHandler={showCartHandler}
                />
            )}
            <div className={classes.actions}>
                {!isOrdering && (
                    <button
                        onClick={showCartHandler}
                        className={classes["button--alt"]}>
                        Close
                    </button>
                )}
                {hasItems && !isOrdering && (
                    <button
                        className={classes.button}
                        onClick={() => setisOrdering(true)}>
                        Order!
                    </button>
                )}
            </div>
        </Modal>
    );
}
