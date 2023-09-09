import { useEffect } from "react";
import classes from "./success.module.css";
import Confetti from "react-confetti";

const Success = ({ onClose, showCartHandler }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [onClose]);

    const buttonClickHandler = () => {
        showCartHandler();
    };

    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    return (
        <div>
            <Confetti
                width={screenWidth}
                height={screenHeight}
                numberOfPieces={200}
                recycle={false}
                gravity={0.3}
            />
            <div style={{ textAlign: "center" }} className={classes.actions}>
                <h2>Success!</h2>
                <p>Your Order has been placed.</p>
                <button onClick={buttonClickHandler}>Close</button>
            </div>
        </div>
    );
};

export default Success;
