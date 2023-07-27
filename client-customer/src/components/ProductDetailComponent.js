import axios from 'axios';
import React, { Component } from 'react';
import withRouter from '../utils/withRouter';
import MyContext from '../contexts/MyContext';

class ProductDetail extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      txtQuantity: 1
    };
  }
  render() {
    const prod = this.state.product;
    if (prod != null) {
      return (
        <div className="align-center">
          <h2 className="text-center">Thông Tin Sản Phẩm</h2>
          <figure className="caption-right">
            <img className="image-sp"src={"data:image/jpg;base64," + prod.image} width="800px" height="800px" alt="" />
            <figcaption>
              <form>
                <table>
                  <tbody>
                    <div className="table-right">
                    <tr>
                      <td className="product-id"align="right">ID:</td>
                      <td className="product-id">{prod._id}</td>
                    </tr>
                    <tr>
                      <td align="right">Tên Sản Phẩm:</td>
                      <td>{prod.name}</td>
                    </tr>
                    <tr>
                      <td align="right">Giá:</td>
                      <td>{prod.price.toLocaleString('vi-VN')} VNĐ </td>
                      
                    </tr>
                    <tr>
                      <td align="right">Loại Sản Phẩm:</td>
                      <td>{prod.category.name}</td>
                    </tr>
                    <tr>
                      <td align="right">Số Lượng:</td>
                      
                      <td><input type="number" min="1" max="99" value={this.state.txtQuantity} onChange={(e) => { this.setState({ txtQuantity: e.target.value }) }} /></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><input className="submit-buy" type="submit" value="MUA NGAY" onClick={(e) => this.btnAdd2CartClick(e)} /></td>
                    </tr>
                    </div>
                  </tbody>
                  
                </table>
                
              </form>
            </figcaption>
          </figure>
        </div>
      );
    }
    return (<div />);
  }
  componentDidMount() {
    const params = this.props.params;
    this.apiGetProduct(params.id);
  }
  // event-handlers
  btnAdd2CartClick(e) {
    e.preventDefault();
    const product = this.state.product;
    const quantity = parseInt(this.state.txtQuantity);
    if (quantity) {
      const mycart = this.context.mycart;
      const index = mycart.findIndex(x => x.product._id === product._id); // check if the _id exists in mycart
      if (index === -1) { // not found, push newItem
        const newItem = { product: product, quantity: quantity };
        mycart.push(newItem);
      } else { // increasing the quantity
        mycart[index].quantity += quantity;
      }
      this.context.setMycart(mycart);
      alert('OK BABY!');
    } else {
      alert('Please input quantity');
    }
  }
  // apis
  apiGetProduct(id) {
    axios.get('/api/customer/products/' + id).then((res) => {
      const result = res.data;
      this.setState({ product: result });
    });
  }
}
export default withRouter(ProductDetail);