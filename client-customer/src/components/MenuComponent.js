import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';
import './css/menu.css';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: '' 
    };
  }
  render() {
    const cates = this.state.categories.map((item) => {
      return (
        <li key={item._id} className="menu"><Link to={'/product/category/' + item._id}className="menu-cus-w">{item.name}</Link></li>
      );
    });
    return (
      
      <div className="border-menu-cus">
        
        <div className="float-right">
          <form className="search">
          <input type="search" placeholder="Bạn tìm gì..." className="keyword" value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} />
          <input className="submit" type="submit" value="Search" onClick={(e) => this.btnSearchClick(e)} />  
          </form>
        <div className="float-left">
          <ul className="menu-cus">
          <li className="menu"><Link to='/'className='menu-cus'>Home</Link></li>
            {cates}
          </ul> 
        </div>
        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/361185015_294762259890016_5526485672518959120_n.png?stp=dst-png_p403x403&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=EvH1GzarhRAAX92k2bi&_nc_oc=AQmErt3Fpx1kbAiBP_41aAhMfOZrNtUba4Sofi_OdJY1XLH9EUbv2wCBp2cMRlusdrpoKGks1d_MlZB8nZBZzvwC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRaCHu3hNLkJTqp7i0J4dINjRAIbyXMyjCk2b9jPFiHdg&oe=64DF54DC" class="logo-image-cus" alt="Logo sneaker"></img>
        <div className="float-clear" />
        </div>
      </div>
    );
  }
  // event-handlers
  btnSearchClick(e) {
    e.preventDefault();
    this.props.navigate('/product/search/' + this.state.txtKeyword);
  }
  componentDidMount() {
    this.apiGetCategories();
  }
  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
}
export default withRouter(Menu);