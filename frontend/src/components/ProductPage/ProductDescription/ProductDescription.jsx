import ProductColor from './ProductColor/ProductColor';
import classes from './ProductDescription.module.css'
import ProductSize from './ProductSize/ProductSize';



function ProductDescription() {
    // должен залетать товар с инфой о нём
    var product = new Map();
    product.set("title", "найк аирфорс калаба баленсиага");
    product.set("article", "3123214");
    product.set("description", "скоростные педали на каждый день. лучшие материалы за свою цену!");
    product.set("composition", "Хлопок 100%");

    var sizes = ["41", "44", "48"];
    product.set("sizes", sizes);

    var colors = ["red", "black", "grey", "white"];
    product.set("colors", colors);

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                {product.get("title")}
            </div>

            <div className={classes.article}>
                Артикул: {product.get("article")}
            </div>

            <div className={classes.description}>
                {product.get("description")}
            </div>

            <div className={classes.composition}>
                <div className={classes.composition__title}>
                    Состав:
                </div>
                {product.get("composition")}
            </div>

            <ProductSize value={product.get("sizes")} />

            <ProductColor value={product.get("colors")} />

            <div className={classes.order}>

            </div>
        </div>
    );
}

export default ProductDescription;