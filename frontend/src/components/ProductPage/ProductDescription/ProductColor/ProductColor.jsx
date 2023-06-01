import classes from './ProductColor.module.css'

function ProductColor({ value }) {

    const colors = value;

    return (
        <div className={classes.color}>
            <div className={classes.color__title}>
                Цвет:
            </div>
            {colors.map(color =>(
                <span className={classes.select__color}
                style={{background: color}}
                ></span>
            ))}
        </div>
    );
}

export default ProductColor;