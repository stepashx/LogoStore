import styles from "./ProductCard.module.css"
import heart from "../../images/heart.svg"
import toLeft from "../../images/left.svg"
import toRight from "../../images/right.svg"
import React, { useState, useEffect } from "react";


//const product = {name: "Капучино", img: "/cappuccino.jpg", 
//                 price: 220, sale: true, new: false}

function ProductCard({product}) {
    const [currImgNo, setCurrImgNo] = useState(0);

    const nextImg = () => setCurrImgNo((cur) => (cur + 1) % product.img.length);
    const prevImg = () => setCurrImgNo((cur) => cur > 0 ? cur - 1 : product.img.length - 1);

    console.log(product)
    return (
        <div className={styles.productCard}>
            <img src={product.img[currImgNo]} alt="image"/>
            <div className={styles.flags}>
                <div className={product.new ? styles.newFlagActive : styles.newFlag}>
                    new
                </div>
                <div className={product.sale ? styles.saleFlagActive : styles.saleFlag}>
                    sale
                </div>
                <img src={heart} className={styles.toFavorites} alt="heart"/>
            </div>
            <img src={toLeft} className={styles.toPrev} alt="to prev"  onClick={prevImg}/>
            <img src={toRight} className={styles.toNext} alt="to next"  onClick={nextImg}/>
            <p className={styles.name}>{product.name}</p>
            <p className={product.sale ? styles.priceWithSale : styles.price}>
                {product.price} &#8381;
            </p>
            </div>
    )
}

export default ProductCard
