import styles from "./LowerHeader.module.css";
import logo from "../../../images/logo.gif";
import heart from "../../../images/heart.svg"
import user from "../../../images/user.svg"
import basket from "../../../images/basket.svg"
import burgerMenu from "../../../images/burgerMenu.svg"
import SearchBar from "../SearchBar/SearchBar";


const data = [{text: "избранное", img: heart},
              {text: "вход", img: user},
              {text: "корзина", img: basket}]

function LowerHeader() {
    return (
        <div className={styles.lowerHeader}>
            <img src={logo} className={styles.logo} alt={"logo"}/>
            <div className={styles.searchBlock}>
                <div className={styles.burgerBlock}>
                    <img src={burgerMenu} className={styles.burgerMenu} alt={"burgerMenu"}/>
                    <div className={styles.catalog}>Каталог</div>
                </div>
                <SearchBar/>
            </div>
            <div className={styles.lowerHeader__content}>
                <img src={data[0].img} alt=" "/>
                <p className={styles.lowerHeaderItem__text}>
                    {data[0].text}
                </p>
                <img src={data[1].img} alt=" "/>
                <p className={styles.lowerHeaderItem__text}>
                    {data[1].text}
                </p>
                <img src={data[2].img} alt=" "/>
                <p className={styles.lowerHeaderItem__text}>
                    {data[2].text}
                </p>
             </div>
        </div>
    )
}

export default LowerHeader;