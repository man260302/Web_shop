import React, { Component } from 'react';
import './css/home.css';
import { Helmet } from 'react-helmet';
import '@fortawesome/fontawesome-free/css/all.css'; 
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      
      <div className="align-center">
        <Helmet>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.css" />
          <link rel="stylesheet" type="text/css" href="fontawesome-free/css/all.min.css" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        </Helmet>
		<div className="Nav-Menu-home">
        <ul className="x-tr-ab">	
          <li className="menu"><Link to='/admin/home'className="x-tr-t">TRANG CHỦ</Link></li>
          <li className="menu"><Link to='/admin/category'className="x-tr-t">LOẠI SẢN PHẨM</Link></li>
          <li className="menu"><Link to='/admin/product'className="x-tr-t">SẢN PHẨM</Link></li>
          <li className="menu"><Link to='/admin/order'className="x-tr-t">ĐẶT HÀNG</Link></li>
          <li className="menu"><Link to='/admin/customer'className="x-tr-t">KHÁCH HÀNG</Link></li>
        </ul>
		</div>
	<body>
	
	<div id="home" class="home">
        <h1 className="text-center">TRANG CHỦ ADMIN</h1>
    
      <div class="row">
      <div class="col-3 col-m-6 col-sm-6">
				<div class="counter bg-primary">
					<p>
						<i class="fas fa-tasks"></i>
					</p>
					<h3>100+</h3>
					<p>To do</p>
				</div>
        </div>
        <div class="col-3 col-m-6 col-sm-6">
				<div class="counter bg-warning">
					<p>
						<i class="fas fa-spinner"></i>
					</p>
					<h3>100+</h3>
					<p>In progress</p>
				</div>
			</div>
      <div class="col-3 col-m-6 col-sm-6">
				<div class="counter bg-success">
					<p>
						<i class="fas fa-check-circle"></i>
					</p>
					<h3>100+</h3>
					<p>Completed</p>
				</div>
			</div>
      <div class="col-3 col-m-6 col-sm-6">
				<div class="counter bg-danger">
					<p>
						<i class="fas fa-bug"></i>
					</p>
					<h3>100+</h3>
					<p>Issues</p>
				</div>
			</div>
      </div>
      
      <div class="row">
			<div class="col-8 col-m-12 col-sm-12">
				<div class="card">
					<div class="card-header">
						<h3>
							Danh sách thành viên quản trị
						</h3>
						<i class="fas fa-ellipsis-h"></i>
					</div>
					<div class="card-content">
						<table>
							<thead>
								<tr>
									<th>#</th>
									<th>Tên thành viên</th>
									<th>Vai trò</th>
									<th>Status</th>
									<th>Ngày cập nhật</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Nguyễn Minh Mẩn</td>
									<td>Quản lý trang ADMIN</td>
									<td>
										<span class="dot">
											<i class="bg-success"></i>
											Completed
										</span>
									</td>
									<td>12/06/2023</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Ngọ Văn Long</td>
									<td>Quản lý trang Customer</td>
									<td>
										<span class="dot">
											<i class="bg-warning"></i>
											In progress
										</span>
									</td>
									<td>25/06/2023</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Trần Thị Kim Ngân</td>
									<td>Quản lý Server</td>
									<td>
										<span class="dot">
											<i class="bg-warning"></i>
											In progress
										</span>
									</td>
									<td>03/07/2023</td>
								</tr>	
							</tbody>
						</table>
					</div>
				</div>
			</div>
			
		</div>
		</div>
		</body>
		
	</div>
      
   
      
      
    );
  }
}
export default Home;