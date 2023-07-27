import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import withRouter from '../utils/withRouter';
import './css/login.css';
import '@fortawesome/fontawesome-free/css/all.css'; 

class Login extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: ''
    };
  }
  render() {
    return (
      <body id="unique-body">
      <div id="wrapper">
        <form action='' id="form-login">
          <h1 class="form-heading">ĐĂNG NHẬP KHÁCH HÀNG</h1>
          <div class="form-group">
            <i class="far fa-user"></i>
            <input type="text" class="form-input" placeholder="Tên tài khoản" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }} />
          </div>
          <div class="form-group"> 
          <i class="fa-solid fa-key"></i>  
            <input type="password" class="form-input" placeholder="Mật Khẩu" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }} />
          </div>   
            <input type="submit" value="Đăng Nhập" class="form-submit"onClick={(e) => this.btnLoginClick(e)} />
        
        </form>
        
      </div>
      <div class="marquee-container">
          <div className="marquee-content">
          SNEAKERSHOP - SĐT: 0583376429 - <a href="https://www.facebook.com/profile.php?id=100095085854134&mibextid=ZbWKwL">https://www.facebook.com/profile.php?id=100095085854134&mibextid=ZbWKwL</a>
          </div>
          </div>

      </body>
    );
  }
  // event-handlers
  btnLoginClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    if (username && password) {
      const account = { username: username, password: password };
      this.apiLogin(account);
    } else {
      alert('Please input username and password');
    }
  }
  // apis
  apiLogin(account) {
    axios.post('/api/customer/login', account).then((res) => {
      const result = res.data;
      if (result.success === true) {
        this.context.setToken(result.token);
        this.context.setCustomer(result.customer);
        this.props.navigate('/home');
      } else {
        alert(result.message);
      }
    });
  }
}
export default withRouter(Login);
