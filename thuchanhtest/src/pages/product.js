import React , {Component } from 'react';
import { Container , Row , Col ,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import axios from 'axios';

import {CartContext} from '../context/Cart' ;

class product extends Component{
    constructor(props){
        super(props);
        this.state ={
            products :[]
        };
    }

    componentDidMount(){
      
    axios.get('http://localhost:3000/products').then(res => {
        this.setState({
          products : res.data
        });
      });
    }
    render(){
        const { products } = this.state ;
        return (
          
        <Container>
            <h2>Product</h2>
            <Row>
                {
                    products.map(product =>(
                      
                        <Col sm= "4">
                            <Card>
                                <CardImg top width="100%" src={product.imageUrl}  />
                                <CardBody>
                                <CardTitle>{product.name}</CardTitle>
                                <CardText>{product.desciption}</CardText>
                                <CartContext.Consumer>
                                    {
                                        ({ addToCart }) =>  <Button onClick = {()=>addToCart(product)}>add to cart</Button>
                                    }
                                </CartContext.Consumer>
                               
                                </CardBody>
                            </Card>
                        </Col>
                        
                    ))
                }
            </Row>
        </Container>
        );
    }
}
export default product ;