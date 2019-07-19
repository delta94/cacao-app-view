import React, { Component } from 'react';
import { Container } from 'reactstrap';

import { AppContext } from '../contexts/CartContext';
import ProductCart from '../components/ProductCart';
import './Cart.css'

class Cart extends Component {
    render() {
        return(
            <Container>
                <div className="Cart-box">
                    <AppContext.Consumer>
                        {({CartItems}) => CartItems.map(item => <ProductCart
                        Item={item}/>)}
                    </AppContext.Consumer>
                </div>
            </Container>
        )
    }
}

export default Cart;