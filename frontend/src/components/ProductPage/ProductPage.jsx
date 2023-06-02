import classes from './ProductPage.module.css'
import ProductPath from './ProductPath/ProductPath';
import ImageBlock from './ImageBlock/ImageBlock';
import ProductDescription from './ProductDescription/ProductDescription';

function ProductPage() {
    return (
        <div className={classes.container}>
            <ProductPath />
            <div className={classes.content}>
                <div className={classes.left__part}><ImageBlock /></div>
                <div className={classes.right__part}><ProductDescription /></div>
            </div>
        </div>
    );
}

export default ProductPage;