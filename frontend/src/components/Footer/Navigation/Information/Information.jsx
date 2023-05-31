import classes from './Information.module.css'

function Information() {
    return (
        <div className={classes.info__wrapper}>
            <ul className={classes.info}>
                <li><a href="/" rel="noreferrer">О нас</a></li>
                <li><a href="/">Отзывы</a></li>
                <li><a href="/">Контакты</a></li>
                <li><a href="/">Доставка</a></li>
                <li><a href="/">Условия возврата</a></li>
            </ul>
            <div className={classes.contacts}>
                <h1>+7(123)456-78-90<br />example@gmail.com</h1>
            </div>
        </div>
    );
}

export default Information;