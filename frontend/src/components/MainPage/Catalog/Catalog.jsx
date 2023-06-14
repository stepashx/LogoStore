import classes from './Catalog.module.css'
import { Grid, Row, Col } from 'react-flexbox-grid';

function Catalog(props) {
    var categories = props.value[0];
    return (
        <div className={classes.container}>
            <Grid className={classes.grid} fluid>
                <Row center="lg">
                    {categories.map((category, index) => (
                        <Col onClick={() => { cardClicked(category);}} sm={12} md={6} lg={4}>
                            <CategoryCard value={[category, props.value[1][index]]}/>
                        </Col>
                    ))}
                </Row>
            </Grid>
        </div>
    );
}

function CategoryCard(props) {

    
    return(
        <div className={classes.category__card}>
            <div className={classes.left__name}>
                {props.value[0]}
            </div>
            <div className={classes.right__image} style={{backgroundImage: 'url(' + props.value[1] + ')'}}></div>
        </div>
    )
    
}

function cardClicked(category) {
    console.log("clicked on: " + category)
}

export default Catalog;