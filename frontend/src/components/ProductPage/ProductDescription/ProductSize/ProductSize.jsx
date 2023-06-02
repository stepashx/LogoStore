import React from 'react';
import classes from './ProductSize.module.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function ProductSize(props) {

    const sizes = props.value;
    const defaultSize = sizes[0];
    var size = sizes[0];

    const handleSizeChange = (event) => {
        size = event.value;
        props.onSize(size);
    };

    return (
        <div className={classes.size}>
            <div className={classes.size__title}>
                Размер:
            </div>
            <Dropdown onChange={handleSizeChange} className={classes.size__dropdown} options={sizes} value={defaultSize} />
        </div>
    );
}

export default ProductSize;