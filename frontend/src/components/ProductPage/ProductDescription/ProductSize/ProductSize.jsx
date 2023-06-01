import classes from './ProductSize.module.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function ProductSize({ value }) {

    const sizes = value;
    const defaultSize = sizes[0];

    return (
        <div className={classes.size}>
            <div className={classes.size__title}>
                Размер:
            </div>
            <Dropdown className={classes.size__dropdown} options={sizes} value={defaultSize} />
        </div>
    );
}

export default ProductSize;