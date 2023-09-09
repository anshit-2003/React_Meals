import { useState, useEffect, useRef, useContext } from "react";
import classes from "./checkout.module.css";
import cartContext from "../../Store/Context";
import Success from "./success.jsx";

const Checkout = (props) => {
    const ctx = useContext(cartContext);
    const [isFormValid, setisFormValid] = useState({
        name: true,
        street: true,
        postal: true,
        city: true,
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const nameInput = useRef();
    const streetInput = useRef();
    const postalInput = useRef();
    const cityInput = useRef();

    useEffect(() => {
        setisFormValid({
            name: true,
            street: true,
            postal: true,
            city: true,
        });
    }, []);

    const isEmpty = (value) => value.trim() === "";
    const isSixChars = (value) => value.trim().length === 6;

    const confirmHandler = (event) => {
        event.preventDefault();

        const name = nameInput.current.value;
        const street = streetInput.current.value;
        const postal = postalInput.current.value;
        const city = cityInput.current.value;

        const nameIsValid = !isEmpty(name);
        const streetIsValid = !isEmpty(street);
        const postalIsValid = isSixChars(postal) && !isEmpty(postal);
        const cityIsValid = !isEmpty(city);

        setisFormValid({
            name: nameIsValid,
            street: streetIsValid,
            postal: postalIsValid,
            city: cityIsValid,
        });

        if (nameIsValid && streetIsValid && postalIsValid && cityIsValid) {
            setIsSubmitted(true);
        }
    };

    const resetForm = () => {
        nameInput.current.value = "";
        streetInput.current.value = "";
        postalInput.current.value = "";
        cityInput.current.value = "";

        setIsSubmitted(false);
    };

    //Reset Cart
    const resetCart = () => {
        ctx.clearCart();
    };

    return (
        <div>
            {isSubmitted ? (
                <Success
                    onClose={resetForm}
                    showCartHandler={props.showCartHandler}
                />
            ) : (
                <form className={classes.form} onSubmit={confirmHandler}>
                    <div
                        className={`${classes.control} ${
                            !isFormValid.name ? classes.invalid : ""
                        }`}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" ref={nameInput} />
                        {!isFormValid.name && <p>Please enter a valid name!</p>}
                    </div>
                    <div
                        className={`${classes.control} ${
                            !isFormValid.street ? classes.invalid : ""
                        }`}>
                        <label htmlFor="street">Street</label>
                        <input type="text" id="street" ref={streetInput} />
                        {!isFormValid.street && (
                            <p>Please enter a valid street!</p>
                        )}
                    </div>
                    <div
                        className={`${classes.control} ${
                            !isFormValid.postal ? classes.invalid : ""
                        }`}>
                        <label htmlFor="postal">Postal Code</label>
                        <input type="text" id="postal" ref={postalInput} />
                        {!isFormValid.postal && (
                            <p>Please enter a valid 6-digit postal code.</p>
                        )}
                    </div>
                    <div
                        className={`${classes.control} ${
                            !isFormValid.city ? classes.invalid : ""
                        }`}>
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" ref={cityInput} />
                        {!isFormValid.city && <p>Please enter a valid city!</p>}
                    </div>
                    <div className={classes.actions}>
                        <button type="button" onClick={props.onCancel}>
                            Cancel
                        </button>
                        <button className={classes.submit} onClick={resetCart}>
                            Confirm
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Checkout;
