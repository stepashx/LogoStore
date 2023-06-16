import styles from "./UpperHeader.module.css";
import UpperHeaderItem from "./UpperHeaderItem.js";
import logo from "../../../images/logo.svg";
import tg from "../../../images/tg.svg";
import youtube from "../../../images/youtube.svg";
import vk from "../../../images/vk.svg";
import wa from "../../../images/wa.svg"


const data = [{text: "о нас", type: "about"},
              {text: "как заказать", type: "orders"},
              {text: "декларации", type: "declarations"},
              {text: "отзывы", type: "reviews"},
              {text: "контакты", type: "contacts"},
              {text: "outlet", type: "outlet"}]


function UpperHeader({item}) {
    return (
        <div className={styles.upperHeader}>
            <div className={styles.upperHeader__content}>
                {data.map((option)=> <UpperHeaderItem text={option.text}
                                                  active={(option.type === item)}
                                                    link={"/" + option.type}/>)}
            </div>
            <div className={styles.communication}>
                <img src={tg} className={styles.logo} alt={"logo"}/>
                <img src={youtube} className={styles.logo} alt={"logo"}/>
                <img src={vk} className={styles.logo} alt={"logo"}/>
                <div className={styles.writeUs}>
                    <img src={wa} className={styles.writeUs__logo} alt={"logo"}/>
                    <div className={styles.writeUs__text}>Написать нам</div>
                </div>
            </div>

        </div>
    )
}

export default UpperHeader;
