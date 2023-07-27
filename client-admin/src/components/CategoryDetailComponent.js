import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';

class CategoryDetail extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtID: '',
      txtName: ''
    };
  }
  render() {
    return (
      <div className="beside">
        
        <h2 className="text-center">DANH MỤC CHI TIẾT</h2>
        <form>
          <table>
            <tbody>
              <tr>
                <td>ID</td>
                <td><input className="add-id" type="text" value={this.state.txtID} onChange={(e) => { this.setState({ txtID: e.target.value }) }} readOnly={true} /></td>
              </tr>
              <tr>
                <td>Name</td>
                <td><input className="add-id"type="text" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }} /></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input className="add-sub" type="submit" value="ADD NEW" onClick={(e) => this.btnAddClick(e)} />
                  <input className="add-up"type="submit" value="UPDATE" onClick={(e) => this.btnUpdateClick(e)} />  
                  <input className="add-del"type="submit" value="DELETE" onClick={(e) => this.btnDeleteClick(e)} />
                  
                </td>
              </tr>
              
            </tbody>
          </table>
        </form>
        <div class="row">
			<div class="board">
				<div class="card">
					<div class="card-header">
						<h3>
							Thành phần sản phẩm
						</h3>
						<i class="fas fa-ellipsis-h"></i>
					</div>
					<div class="card-content">
						<table>
							<thead>
								<tr>
									<th>#</th>
									<th>Sản Phẩm</th>
									<th>Tình trạng</th>
									
									<th>Ngày cập nhật</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>ADIDAS</td>
									<td>Đã cập nhật</td>
									
									<td>12/06/2023</td>
								</tr>
								<tr>
									<td>2</td>
									<td>NIKE</td>
									<td>Đã cập nhật</td>
									
									<td>25/06/2023</td>
								</tr>
								<tr>
									<td>3</td>
									<td>PUMA</td>
									<td>Đã cập nhật</td>
									
									<td>03/07/2023</td>
								</tr>	
                <tr>
									<td>3</td>
									<td>MLB</td>
									<td>Đã cập nhật</td>
								
									<td>03/07/2023</td>
								</tr>	
							</tbody>
						</table>
					</div>
				</div>
			</div>
      </div>
      </div>
      
    );
  }
  componentDidUpdate(prevProps) {
    if (this.props.item !== prevProps.item) {
      this.setState({ txtID: this.props.item._id, txtName: this.props.item.name });
    }
  }
  // event-handlers
  btnAddClick(e) {
    e.preventDefault();
    const name = this.state.txtName;
    if (name) {
      const cate = { name: name };
      this.apiPostCategory(cate);
    } else {
      alert('Please input name');
    }
  }
  // apis
  apiPostCategory(cate) {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.post('/api/admin/categories', cate, config).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
        this.apiGetCategories();
      } else {
        alert('SORRY BABY!');
      }
    });
  }
  // event-handlers
  btnUpdateClick(e) {
    e.preventDefault();
    const id = this.state.txtID;
    const name = this.state.txtName;
    if (id && name) {
      const cate = { name: name };
      this.apiPutCategory(id, cate);
    } else {
      alert('Please input id and name');
    }
  }
  // apis
  apiPutCategory(id, cate) {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.put('/api/admin/categories/' + id, cate, config).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
        this.apiGetCategories();
      } else {
        alert('SORRY BABY!');
      }
    });
  }  
  apiGetCategories() {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.get('/api/admin/categories', config).then((res) => {
      const result = res.data;
      this.props.updateCategories(result);
    });
  }
  // event-handlers
  btnDeleteClick(e) {
    e.preventDefault();
    if (window.confirm('ARE YOU SURE?')) {
      const id = this.state.txtID;
      if (id) {
        this.apiDeleteCategory(id);
      } else {
        alert('Please input id');
      }
    }
  }
  // apis
  apiDeleteCategory(id) {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.delete('/api/admin/categories/' + id, config).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
        this.apiGetCategories();
      } else {
        alert('SORRY BABY!');
      }
    });
  }
}

export default CategoryDetail;