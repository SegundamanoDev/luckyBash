import React from "react";
import "./DashboardHelper.css";

const DashboardHelper = ({items}) => {
	return (
		<div className='helper_class'>
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Image</th>
						<th>Tracking</th>
						<th>Status</th>
						<th>Date</th>
						<th>Details</th>
						<th>Update</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{items?.map((item, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{item.pic}</td>
							<td>{item.tracking}</td>
							<td>{item.status}</td>
							<td>{item.date}</td>
							<td>{item.details}</td>
							<td>{item.update}</td>
							<td>{item.delete}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DashboardHelper;
