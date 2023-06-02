import { useEffect, useState } from 'react';
import classes from './ProductColor.module.css'

function ProductColor(props) {

    const colors = props.value;

    const [currentColor, setColor] = useState(colors[0]);

    useEffect(() => {
        props.onColor(currentColor);
    }, [currentColor]);

    const handleColorChange = (event) => {
        setColor(event.target.id)
    };

    return (
        <div className={classes.color}>
            <div className={classes.color__title}>
                Цвет: {currentColor}
            </div>
            {colors.map(color => (
                <span className={classes.select__color}
                    style={currentColor === color ? { background: color, filter: 'brightness(0.5)' } : { background: color }}
                    id={color}
                    value={color}
                    onClick={handleColorChange}
                ></span>
            ))}
        </div>
    );
}

export default ProductColor;