import classes from './AboutUs.module.css'

function AboutUs() {
    return (
        <div className={classes.container}>
            <div className={classes.content__wrapper}>
                <h1>О КОМПАНИИ</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales tincidunt ex a faucibus. Morbi eros massa, aliquet at tempor elementum, ornare vel lectus. Sed consequat est ligula, ut condimentum magna cursus eu. Proin velit enim, accumsan non lobortis id, posuere tincidunt augue. Integer vestibulum urna tortor, at auctor est volutpat vitae. Integer vitae lobortis est, ac rhoncus quam. Quisque gravida magna a sem fringilla, non imperdiet tellus vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin in elit sapien. Donec non enim quis urna mattis ultricies non id arcu.</p>
                <button className={classes.about__us__btn}><h1>Подробнее</h1></button>
            </div>
        </div>
    );
}

export default AboutUs;