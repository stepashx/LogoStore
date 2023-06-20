import styles from "./UpperHeaderItem.module.css";


function UpperHeaderItem({text, active, link}) {
    return (
        <div className={active ? styles.upperHeaderItemActive : styles.upperHeaderItem}>
            <p className={active ? styles.upperHeaderItemActive__text : styles.upperHeaderItem__text}>
                {text}
            </p>
        </div>
    )
}

export default UpperHeaderItem;