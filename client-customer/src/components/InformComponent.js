import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';
import './css/menu.css';
class Inform extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="float-left-cus">
      
        <div className="float-right-cart">
        <Link to='/mycart'className="text-color-cart"><i class="fa-solid fa-cart-shopping"></i></Link> của bạn có <b>{this.context.mycart.length}</b> Sản Phẩm
        </div>
        <div className="login">
        {this.context.token === '' ?
        
          <div><Link to='/login' className="text-color"> <i className="fas fa-user"></i></Link>  <Link to='/signup'className="text-color"><i className="fas fa-address-card"></i></Link>  <Link to='/active'className="text-color"><i class="fa-solid fa-street-view"></i></Link></div>
          :
          <div> Chào <b>{this.context.customer.name}</b> | <Link to='/home'className="text-color-size" onClick={() => this.lnkLogoutClick()}><i class="fa-solid fa-right-from-bracket"></i></Link> | <Link to='/myprofile'className="text-color-size"><i class="fa-solid fa-circle-user"></i></Link> | <Link to='/myorders'className="text-color-size"><i class="fa-solid fa-baby-carriage"></i></Link></div>
        } 
       
      </div>
        <div className="float-clear" />
      </div>
      
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
}
}

export default Inform;