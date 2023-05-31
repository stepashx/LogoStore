import classes from './Catalog.module.css'

function Catalog() {

    const titles = ["Пальто", "Платья", "Обувь"];
    const outerwear = ["Пиджаки, жакеты", "Пуховики, шубы", "Кожанные куртки"];
    const clothes = ["Футболки, топы", "Блузки, рубашки", "Трусы, носки"];
    const accessories = ["Шапки, шарфы, перчатки", "Солнцезащитные очки", "Ремни"];

    return (
        <div className={classes.container}>
            <div className={classes.navigation}>
                <ul>
                    {titles.map(title => (
                        <li className={classes.nav__title}><a href="/">{title}</a></li>
                    ))}
                </ul>

                <ul>
                    <li className={classes.nav__title}><a href="/" rel="noreferrer">Верхняя одежда</a></li>
                    {outerwear.map(outerwear => (
                        <li><a href="/">{outerwear}</a></li>
                    ))}
                </ul>

                <ul>
                    <li className={classes.nav__title}><a href="/" rel="noreferrer">Одежда</a></li>
                    {clothes.map(cloth => (
                        <li><a href="/">{cloth}</a></li>
                    ))}
                </ul>
                <ul>
                    <li className={classes.nav__title}><a href="/" rel="noreferrer">Аксессуары</a></li>
                    {accessories.map(accessory => (
                        <li><a href="/">{accessory}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Catalog;