import classes from "./header.module.css";
import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

export default function Header({ showCartHandler }) {
    return (
        <>
            <header className={classes.header}>
                <h1>React Meals!</h1>
                <HeaderCartButton showCartHandler={showCartHandler} />
            </header>
            <div className={classes["main-image"]}>
                <img src={meals} alt="A table of Food!" />
            </div>
        </>
    );
}
