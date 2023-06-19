import ProductCard from '../../ProductCard/ProductCard';
import classes from './NewProducts.module.css'
import Carousel from 'better-react-carousel'

function NewProducts() {

    const images = [
        "https://sun9-67.userapi.com/impg/OfLo9ifwQu2W99e8qEOrNUlylbxo3iOkEbzEiA/esAgBr6og6I.jpg?size=277x481&quality=96&sign=d6d21176378327407f9cec1b022cffdb&type=album",
        "https://i.ytimg.com/vi/N6FpyM2LFsM/mqdefault.jpg",
        "https://gosneakers.ru/wa-data/public/shop/products/53/20/2053/images/8640/8640.440@2x.jpg",
        "https://static.insales-cdn.com/images/products/1/6580/304150964/%D0%96%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B5_%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8_Nike_Air_Force_1_Low_%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C_%D0%BE%D0%BD%D0%BB%D0%B0%D0%B8%CC%86%D0%BD_.jpeg",
        "https://cdn.shopify.com/s/files/1/0015/2602/products/DeathGripsMoneyStoreT.png?v=1599082643",
        "https://psv4.userapi.com/c909518/u240873722/docs/d47/eaa48079d4ff/94f2a2a93a89f7946a32cbced050b576-PhotoRoom_png-PhotoRoom.png?extra=_Evvaoq1G5io1St505sndxKSiEMOa5gesJmD5dMmvev0aqHiep-Hb0zooCwUmPMd7Y836LkqPBPFuOHpA7DxI32Q01gNJkXL026Jbu5Uya_ot8EYGUy4BBYbWKFyBl1qWGCpSddOg8JLcmz_-OYB",
        "https://static.tvtropes.org/pmwiki/pub/images/death_23.jpg"
    ];

    const product = {
        name: "Капучино", img: "https://i.ytimg.com/vi/N6FpyM2LFsM/mqdefault.jpg",
        price: 220, sale: true, new: false
    }

    return (
        <div className={classes.container}>
            <h1>Новые поступления</h1>
            <Carousel className={classes.carousel} cols={3} rows={1} gap={10} loop showDots={false}>
                {images.map(image => (
                    <Carousel.Item className={classes.carousel__item}>
                        <ProductCard product={product} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default NewProducts;