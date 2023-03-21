import React, { useState } from "react";
import "./DisplayItemsStyles.css";
import {Card} from "react-bootstrap";

export const DisplayItems = ({ items }) => {

    const [cartItems, setCartItems] = useState([{
        tool: "hammer", vibeLevel: 10, minutes: 10, points: 70
    }
    ]);

    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeItemFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    const calculateTotalPoints = () => {
        return cartItems.reduce((acc, curr) => acc + curr.points, 0);
    };

    return (
        <div>
            <Card className="m-4">

            </Card>
        </div>
    );
};

