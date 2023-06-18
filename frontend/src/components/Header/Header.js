import styles from "./Header.module.css";
import UpperHeader from "./UpperHeader/UpperHeader.js";
import LowerHeader from "./LowerHeader/LowerHeader.js";


function Header({item}) {
    return (
        <div className={styles.header}>
            <UpperHeader item={item}/>
            <LowerHeader/>
        </div>
    )
}

export default Header;