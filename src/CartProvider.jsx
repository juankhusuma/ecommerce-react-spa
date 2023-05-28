import { createContext } from "react";
import { useState } from 'react';

export const CartContext = createContext({
    items: [],
    setItems: () => { }
});

export default function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    return (
        <CartContext.Provider value={{ items, setItems }}>
            {children}
        </CartContext.Provider>
    );
}