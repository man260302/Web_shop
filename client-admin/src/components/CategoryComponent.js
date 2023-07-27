import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import CategoryDetail from './CategoryDetailComponent';
import './css/category.css';
import { Link } from 'react-router-dom';
class Category extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      itemSelected: null
    };
  }
  render() {
    const cates = this.state.categories.map((item) => {
      return (
        <tr key={item._id} className="datatable" onClick={() => this.trItemClick(item)}>
          <td>{item._id}</td>
          <td>{item.name}</td>
        </tr>
      );
    });
    return (
      <div>
       <div className="Nav-Menu">
        <ul className="x-tr-ab">
        <li className="menu"><Link to='/admin/home'className="x-tr-t">TRANG CHỦ</Link></li>
          <li className="menu"><Link to='/admin/category'className="x-tr-t">LOẠI SẢN PHẨM</Link></li>
          <li className="menu"><Link to='/admin/product'className="x-tr-t">SẢN PHẨM</Link></li>
          <li className="menu"><Link to='/admin/order'className="x-tr-t">ĐẶT HÀNG</Link></li>
          <li className="menu"><Link to='/admin/customer'className="x-tr-t">KHÁCH HÀNG</Link></li>
        </ul>
      </div>
        <body>
        <div class="background-detail">
          
        <div className="float-left">
          <h2 className="text-cate">CÁC LOẠI SẢN PHẨM</h2>
          <table className="datatable-1" border="1">
            <tbody>
              <tr className="color-table">
                <th>ID</th>
                <th>Name</th>
              </tr>
              {cates}
            </tbody>
          </table>
        </div>
        <div className="inline" />
        <CategoryDetail item={this.state.itemSelected} updateCategories={this.updateCategories} />
        <div className="float-clear" />
       
        
      </div>
        </body>
        
        
      </div>
      
      
      
    );
  }
  componentDidMount() {
    this.apiGetCategories();
  }
  // event-handlers
  trItemClick(item) {
    this.setState({ itemSelected: item });
  }
  updateCategories = (categories) => { // arrow-function
      this.setState({ categories: categories });
  }
 
  // apis
  apiGetCategories() {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.get('/api/admin/categories', config).then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
}
export default Category;