import React, {useEffect} from "react";
import "./Dashboard.css";
import {useDispatch, useSelector} from "react-redux";
import {DeleteOrder, GetOrder, GetOrders} from "../Redux/slices/orderSlice";
import {Link, useNavigate} from "react-router-dom";

const Dashboard = () => {
	const {orders, loading, error} = useSelector((state) => state.order);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(GetOrders());
	}, [dispatch]);

	const handleDelete = async (id) => {
		const result = await dispatch(DeleteOrder(id));
		if (result) {
			location.reload();
		}
	};
	return (
		<div className='dashboard_container'>
			{loading ? (
				<h2>Loading. . .</h2>
			) : error ? (
				<h2>Error: {error}</h2>
			) : Array.isArray(orders) && orders.length > 0 ? (
				<>
					<table>
						<thead>
							<tr>
								<th>#</th>
								<th>Image</th>
								<th>Tracking number</th>
								<th>Status</th>
								<th>Date</th>
								<th>Details</th>
								<th>Update</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{orders?.map((item, index) => (
								<tr key={item._id}>
									<td>{index + 1}</td>
									<td>
										<img
											src={item.orderImg.secure_url}
											alt={item.orderImg}
											className='orderImg'
										/>
									</td>
									<td>{item.refNumber}</td>
									<td>{item.status}</td>
									<td>{item.createdAt}</td>
									<td>
										<Link to={`/order/${item._id}`} className='view_btn'>
											view
										</Link>
									</td>
									<td>
										<Link
											to={`/update-order/${item._id}`}
											className='update_btn'>
											update
										</Link>
									</td>
									<td>
										<Link
											onClick={() => handleDelete(item._id)}
											className='delete_btn'>
											delete
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</>
			) : (
				<h2>No Orders Available</h2>
			)}
		</div>
	);
};

export default Dashboard;
