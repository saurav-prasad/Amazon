import { useContext, useReducer } from "react";
import cartContext from "./cartContext";
export const CartState = ({ reducer, initialState, children }) => {

    return (
        <cartContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </cartContext.Provider>
    )
}

export const useCartState = () => useContext(cartContext);