import classes from './ImageBlock.module.css'
import Carousel from 'better-react-carousel'

function ImageBlock() {
    // const MyDot = ({ isActive }) => (
    //     <span
    //       style={{
    //         display: 'inline-block',
    //         height: isActive ? '8px' : '5px',
    //         width: isActive ? '8px' : '5px',
    //         background: '#1890ff'
    //       }}
    //     ></span>
    //   )
    const images = [
        "https://sadovod-krossovki.ru/wp-content/uploads/2022/08/nike-air-force-1-07-white-black-swoosh-CJ0952_100-3-scaled.jpg",
        "https://i.ytimg.com/vi/N6FpyM2LFsM/mqdefault.jpg",
        "https://gosneakers.ru/wa-data/public/shop/products/53/20/2053/images/8640/8640.440@2x.jpg",
        "https://static.insales-cdn.com/images/products/1/6580/304150964/%D0%96%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B5_%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8_Nike_Air_Force_1_Low_%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C_%D0%BE%D0%BD%D0%BB%D0%B0%D0%B8%CC%86%D0%BD_.jpeg"
    ];
    return (
        <div className={classes.container}>
            {/* TODO: custom dot */}
            <Carousel cols={1} rows={1} gap={10} loop showDots={true}>
                {images.map(image => (
                    <Carousel.Item>
                        <img width="100%" alt="" src={image} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default ImageBlock;