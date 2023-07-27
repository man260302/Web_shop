import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './css/home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newprods: [],
      hotprods: []
    };
  }
  render() {
    const newprods = this.state.newprods.map((item) => {
      return (
        <div key={item._id} className="inline">
          
          <figure>
          
            <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" /></Link>
            <figcaption className="text-price-x">{item.name}<br />
            Giá: {item.price.toLocaleString('vi-VN')} VNĐ
            <div className="text-price">4.500.000 VNĐ</div>
            </figcaption>
         
          </figure>
          </div>
      
      );
    });
    const hotprods = this.state.hotprods.map((item) => {
      return (
        <div key={item._id} className="inline">
          <figure>
            
            <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" /></Link>
            <figcaption className="text-price-x">{item.name}<br />
            Giá: {item.price.toLocaleString('vi-VN')} VNĐ
            <div className="text-price">4.500.000 VNĐ</div>
            </figcaption>
           
          </figure>
         </div>
      
      );
    });
    return (
      <div>
        <div className="align-center">
        <Helmet>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.css" />
          <link rel="stylesheet" type="text/css" href="fontawesome-free/css/all.min.css" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        </Helmet>
          <h2 className="text-center">SẢN PHẨM MỚI</h2>
          {newprods}
        </div>
        {this.state.hotprods.length > 0 ?
          <div className="align-center">
            <h2 className="text-center">BÁN CHẠY GẦN ĐÂY</h2>
            {hotprods}
            
          </div>
          : <div />}
          <div class="marquee-container">
          <div className="marquee-content">
          SNEAKERSHOP - SĐT: 0583376429 - <a href="https://www.facebook.com/profile.php?id=100095085854134&mibextid=ZbWKwL">https://www.facebook.com/profile.php?id=100095085854134&mibextid=ZbWKwL</a>
          </div>
          </div>

 

      </div>
    );
  }
  
  componentDidMount() {
    this.apiGetNewProducts();
    this.apiGetHotProducts();
  }
  // apis
  apiGetNewProducts() {
    axios.get('/api/customer/products/new').then((res) => {
      const result = res.data;
      this.setState({ newprods: result });
    });
  }
  apiGetHotProducts() {
    axios.get('/api/customer/products/hot').then((res) => {
      const result = res.data;
      this.setState({ hotprods: result });
    });
  }
}
export default Home;