import React, { useState, useEffect } from 'react';
import classes from './Cart.module.css'

const Cart = ({ items, onUpdateQuantity, onRemoveItem, onCheckout }) => {
    var [items, setItems] = useState([
        {
            id: 123321, name: "Скороходы", image: "https://i.ytimg.com/vi/N6FpyM2LFsM/mqdefault.jpg",
            price: 220, size: 41, quantity: 1,
        },
        {
            id: 1231, name: "Аирфорсы палёные", image: "https://gosneakers.ru/wa-data/public/shop/products/53/20/2053/images/8640/8640.440@2x.jpg",
            price: 310, size: 38, quantity: 1,
        },
        {
            id: 12332124, name: "Аирфорсы оригинал", image: "https://sadovod-krossovki.ru/wp-content/uploads/2022/08/nike-air-force-1-07-white-black-swoosh-CJ0952_100-3-scaled.jpg",
            price: 14445, size: 45, quantity: 1,
        },
    ])


    var totalPrice = 0
    var totalItems = 0


    items.map(item => (
        totalItems += item.quantity,
        totalPrice += item.price * item.quantity
    ))

    const [curTotalPrice, setCurTotalPrice] = useState(totalPrice)
    const [curTotalItems, setCurTotalItems] = useState(totalItems)

    const handleUpdateQuantity = (data) => {
        totalPrice = 0
        totalItems = 0
        items.map(item => (
            item.quantity = item.id === data[0] ? data[1] : item.quantity,
            totalItems += item.quantity,
            totalPrice += item.price * item.quantity,
            setCurTotalPrice(totalPrice),
            setCurTotalItems(totalItems)
        ))
    }

    const handleDeleteItem = (data) => {
        items.map((item, index) => (
            item.id === data && (
                totalItems -= item.quantity,
                totalPrice -= item.price * item.quantity,
                setCurTotalPrice(totalPrice),
                setCurTotalItems(totalItems),
                items.splice(index, 1))
        ))
    }

    // Вот это будет происходить если тыкнуть оформить заказ
    // const onCheckout() {

    // }

    return (
        <div>
            <h1 className={classes.cart__title}>Корзина</h1>
            <div className={classes.path}>
                <a href="">&lt; Вернуться в каталог</a>
            </div>
            <div className={classes.container}>
                {items.length === 0 ? (
                    <p className={classes.empty__cart}>Ваша корзина пуста</p>
                ) : (
                    <div className={classes.content__wrapper}>
                        <div className={classes.cart__left__part}>
                            {items.map((item, index) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onUpdateQuantity={handleUpdateQuantity}
                                    onRemoveItem={handleDeleteItem}
                                    isLast={index === items.length - 1 ? true : false}
                                />
                            ))}
                        </div>
                        <div className={classes.cart__right__part}>
                            <p className={classes.order__title}>ЗАКАЗ</p>
                            <hr />
                            <p className={classes.order__count}>Кол-во товаров: {curTotalItems} шт.</p>
                            <p className={classes.order__price}>К оплате: {curTotalPrice}₽</p>
                            <button className={classes.order_btn} onClick={onCheckout}>Оформить заказ</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const CartItem = ({ item, onUpdateQuantity, onRemoveItem, isLast }) => {
    const [quantity, setQuantity] = useState(item.quantity);

    const [price, setPrice] = useState(item.price);

    useEffect(() => {
        handlePriceChange();
        onUpdateQuantity([item.id, quantity])
    }, [quantity]);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);
    };

    const handlePriceChange = () => {
        setPrice(item.price * quantity)
    };

    const handleRemoveItem = () => {
        onRemoveItem(item.id);
    };

    const handleDecreaseQuantity = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
    };

    const handleIncreaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    return (
        <div className={classes.cart__item} style={!isLast ? {borderBottom: '1px solid grey'} : {borderBottom: '0px solid'}}>
            <div className={classes.cart__item__img}>
                <img src={item.image} alt={item.name} />
            </div>

            <div className={classes.cart__item__info}>
                <div className={classes.cart__item__name}>{item.name}</div>
                <div className={classes.cart__item__size}><h1>Размер:&ensp;</h1> {item.size}</div>

                <div className={classes.cart__count}>
                    <h1>Количество:</h1>
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
                </div>

                <div className={classes.cart__price}>
                    <div className={classes.cart__item__price}> <h1>Цена:&ensp;</h1> {price}</div>
                </div>

                <button className={classes.cart__remove__btn} onClick={handleRemoveItem}></button>
            </div>
        </div>
    );
};

export default Cart;
