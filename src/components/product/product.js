import { Navbar, Container, Row, Col } from 'react-bootstrap'
import './product.css'

function Product(props) {
    console.log("props", props.product);
    
    const ProductClicked = () => {
        console.log("clicked in comp");
        props.ProductClicked(props.product);
    }
  return (
        <Container onClick={ProductClicked}  xs={6} className={"product"} >
            <Row>
                <Col>
                    <img className={"product-image"} src={props.product.pictureLink} />
                </Col>
                <Col xs={8}>
                    <Row className={"product-info-row"}>
                        <Col>
                            <h4 className={"product-name"}>{props.product.name} </h4>
                        </Col>
                    </Row>
                    <Row className={"product-info-row"}>
                        <Col className={"text"}>
                            {props.product.explanation}
                        </Col>
                    </Row>
                    <Row className={"product-info-row"}>
                        <Col className={"text"}>
                            Rating: <span className={"normal-text"}>{props.product.starRating} </span>
                        </Col>
                        <Col className={"text"}>
                        Price: <span className={"normal-text"}>{props.product.price} € </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
  );
}

export default Product;
