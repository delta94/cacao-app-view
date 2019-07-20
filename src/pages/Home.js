/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
import React, { Component } from 'react';
import Axios from 'axios';
import { Container, Row } from 'reactstrap'

import Product from '../components/Product'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      featuredProduct: []
    };
  }

  componentDidMount() {
    Axios.get('/api/products/all')
    .then((res) => {
      const products = res.data.products;
      const featuredProduct = products.filter(item => item.feature === true);
      this.setState({
        featuredProduct: featuredProduct.slice(0, 6)
      })
    }).catch(err => console.error(err));
  }

  render() {    
    return (
          <Container>
            <div className="d-flex flex-column align-items-center border-top m-4">
              <h5 className="m-3">Sản phẩm nổi bậc</h5>
              <Row>
                {this.state.featuredProduct.map((item, index) => <Product key = {index} Item = {item} />)}
              </Row>
            </div>
          </Container>
    );
  }
}

