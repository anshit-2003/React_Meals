import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import ContextProvider from "../src/Store/ContextProvider";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
    const [isCartShown, setisCartShown] = useState(false);
    const showCartHandler = () => {
        setisCartShown((prev) => !prev);
    };

    return (
        <ContextProvider>
            {isCartShown ? <Cart showCartHandler={showCartHandler} /> : null}
            <Header showCartHandler={showCartHandler} />
            <main>
                <Meals />
            </main>
        </ContextProvider>
    );
}

export default App;
