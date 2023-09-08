import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartItem from "./CartItem";
import cartContext from "../../Store/Context";

export default function Cart({ showCartHandler }) {
    const context = useContext(cartContext);

    const totalAmount = context.totalAmount.toFixed(2);
    const hasItems = context.items.length > 0;
    const cartItemRemoveHandler = (id) => {
        context.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        context.addItem({...item,amount:1});
    };
    const cartItems = (
        <ul className={classes["cart-items"]}>
            {context.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    Remove={()=>cartItemRemoveHandler(item.id)}
                    Add={()=>cartItemAddHandler(item)}
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
            <div className={classes.actions}>
                <button
                    onClick={showCartHandler}
                    className={classes["button--alt"]}>
                    Close
                </button>
                {hasItems && <button className={classes.button}>Order!</button>}
            </div>
        </Modal>
    );
}
