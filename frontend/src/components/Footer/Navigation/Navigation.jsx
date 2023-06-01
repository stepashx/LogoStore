import classes from './Navigation.module.css'
import Logo from './Logo/Logo';
import Information from './Information/Information';

function Navigation() {
    return (
        <div className={classes.container}>
            <div className={classes.navigation__left}>
                <Logo />
            </div>
            <div className={classes.navigation__right}>
                <Information />
            </div>
        </div>
    );
}

export default Navigation;