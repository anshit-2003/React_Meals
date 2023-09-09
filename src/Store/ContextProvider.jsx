import { useReducer } from "react";
import cartContext from "./Context";

const defaultcartState = {
    items: [],
    totalAmount: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD": {
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.item.id
            );
            const existingItem = state.items[existingCartItemIndex];
            if (existingItem) {
                const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount + action.item.amount,
                };
                const updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
                const updatedTotalAmount =
                    state.totalAmount + action.item.price * action.item.amount;
                return {
                    items: updatedItems,
                    totalAmount: updatedTotalAmount,
                };
            } else {
                const updatedTotalAmount =
                    state.totalAmount + action.item.price * action.item.amount;
                return {
                    items: state.items.concat(action.item),
                    totalAmount: updatedTotalAmount,
                };
            }
        }
        case "REMOVE": {
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.id
            );
            const existingItem = state.items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingItem.price;
            let updatedItems;
            if (existingItem.amount === 1) {
                updatedItems = state.items.filter(
                    (item) => item.id !== action.id
                );
            } else {
                const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount - 1,
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };
        }
        case "CLEAR": {
            return defaultcartState;
        }
        default:
            return state;
    }
};

export default function ContextProvider({ children }) {
    //CartState
    const [cartState, dispatch] = useReducer(reducer, defaultcartState);

    //Functions for Context Management
    const addItem = (item) => {
        dispatch({ type: "ADD", item: item });
    };
    const removeItem = (id) => {
        dispatch({ type: "REMOVE", id: id });
    };
    const clearCart = () => {
        dispatch({ type: "CLEAR" });
    };

    //Context
    const context = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItem,
        removeItem: removeItem,
        clearCart: clearCart,
    };
    return (
        <cartContext.Provider value={context}>{children}</cartContext.Provider>
    );
}
