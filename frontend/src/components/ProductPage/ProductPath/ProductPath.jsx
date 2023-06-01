import classes from './ProductPath.module.css'

function ProductPath() {

    const pathes = ["Главная", "Каталог", "Обувь", "Кросовки", "Найк аирфорс колаба баленсиага"];

    return (
        <div className={classes.container}>
            {pathes.map(path => (
                <h3 className={classes}><a href="/" rel="noreferrer">
                    {path}
                    {pathes[pathes.length - 1] !== path &&
                        <h1>&nbsp;/&nbsp;</h1>
                    }
                </a>
                </h3>
            ))}
        </div>
    );
}

export default ProductPath;