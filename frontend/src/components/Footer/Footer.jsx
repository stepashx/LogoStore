import classes from './Footer.module.css'
import Navigation from './Navigation/Navigation';
import Catalog from './Catalog/Catalog';
import Copyright from './Copyright/Copyright';

function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                {/* Логотип и верхняя навигационная панель */}
                <Navigation />
                {/* Ссылки и каталоги с товаром */}
                <Catalog />
                {/* Копирайт, соцсети и прочее */}
                <Copyright />
            </div>
        </div>
    );
}

export default Footer;