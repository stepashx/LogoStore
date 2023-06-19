import React, { useEffect, useState } from 'react';
import classes from './ProductOrder.module.css'

function ProductOrder(props) {

    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(props.value.get("price"));

    useEffect(() => {
        setPrice(Number(props.value.get("price")) * quantity)
    }, [quantity]);

    const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value));
    };

    const handleDecreaseQuantity = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
    };

    const handleIncreaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleAddToCart = () => {
        console.log(quantity);
        console.log(props.value);
    };

    return (
        <div className={classes.container}>
            <span className={classes.price}>Цена: {price}$</span>
            <div className={classes.count__container}>
                <button className={classes.b__plus} onClick={handleDecreaseQuantity}>-</button>
                <input
                    className={classes.count}
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                />
                <button className={classes.b__minus} onClick={handleIncreaseQuantity}>+</button>
            </div>
            <button
                className={classes.add__to__cart}
                onClick={handleAddToCart}

                onMouseEnter={(event) => {
                    event.target.style.backgroundColor = 'darkgray';
                }}
                onMouseLeave={(event) => {
                    event.target.style.backgroundColor = 'rgb(50, 48, 47)';
                }}
            >
                В корзину
            </button>
        </div>
    );
}

export default ProductOrder;