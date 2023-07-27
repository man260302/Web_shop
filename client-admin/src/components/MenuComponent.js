import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom';
import './css/menu.css';

class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
 
  render() {
    return (
      
      <div className="border-bottom">
      
      <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/361185015_294762259890016_5526485672518959120_n.png?stp=dst-png_p403x403&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=EvH1GzarhRAAX92k2bi&_nc_oc=AQmErt3Fpx1kbAiBP_41aAhMfOZrNtUba4Sofi_OdJY1XLH9EUbv2wCBp2cMRlusdrpoKGks1d_MlZB8nZBZzvwC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRaCHu3hNLkJTqp7i0J4dINjRAIbyXMyjCk2b9jPFiHdg&oe=64DF54DC" class="logo-image" alt="Logo sneaker"></img>
      <div className="navigation-right">
          Hello <b>{this.context.username}</b>
          <Link to='/admin/home' onClick={this.lnkLogoutClick}>
          <i className="fas fa-sign-out-alt logout-icon"></i> {/* Icon Logout từ thư viện Font Awesome */}
          </Link>
        </div>
        <a href="https://www.facebook.com/profile.php?id=100095085854134&mibextid=ZbWKwL">
        <span class="fa-stack fa-2x fa-pull-left">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
       
        
        </span>
        </a>

       
        <div className="float-clear" />
      </div>
      
      
    
  
      
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }
}
export default Menu;