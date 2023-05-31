import classes from './Copyright.module.css'

function Copyright() {
    const year = new Date().getFullYear();

    return (
        <div className={classes.wrapper}>
            <h1>© 5palto, {year}</h1>
        </div>
    );
}

export default Copyright;