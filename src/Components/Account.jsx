import React from "react";
import "./Account.css";
import {useSelector} from "react-redux";

const Account = () => {
	const {user} = useSelector((state) => state.user);

	const templates = [
		{
			status: "Pending",
			subject: "Your Order Confirmation",
			content:
				"Thank you for your order! We've received it and are currently processing the details. You'll receive another update once your order is ready for shipment ",
		},
		{
			status: "Processing",
			subject: "Your Order is Being Prepared",
			content:
				"Exciting news! Your order is currently being prepared for shipment. We'll notify you once it's on its way to your doorstep ",
		},
		{
			status: "Shipped",
			subject: "Subject: Your Order Has Shipped!",
			content:
				"Great news! Your order has been shipped and is now on its way to you. You can track your delivery using the provided tracking information. ",
		},
		{
			status: "Out For Delivery",
			subject: "Your Order is Out for Delivery",
			content:
				"Get ready! Your order is currently out for delivery and will be arriving at your specified address soon. Keep an eye out for our delivery team!",
		},
		{
			status: "Delivered",
			subject: "Your Order Has Been Delivered",
			content:
				"Fantastic news! Your order has been successfully delivered. We hope you enjoy your purchase. If you have any feedback, feel free to let us know!",
		},
		{
			status: "On Hold",
			subject: "Order Status Update",
			content:
				"We wanted to update you that your order is currently on hold. Our team will reach out to you shortly to discuss the details and provide assistance.",
		},
		{
			status: "Cancelled",
			subject: "Order Cancellation Notice",
			content:
				"We regret to inform you that your order has been canceled. If you have any questions or concerns, please reach out to our customer support team for assistance.",
		},
	];
	return (
		<div className='profile-container'>
			<div className='user-details'>
				<h2>Here are your profile details</h2>

				<img src={user?.photo.secure_url} alt={user?.photo.url} />
				<p>Username: {user?.username}</p>
				<p>Email: {user?.email}</p>
			</div>
			<div className='order-templates'>
				<div className='instrct'>
					<h2 style={{color: "red"}}>Instructions!!!</h2>
					<p>
						Delivery Note for each status, copy and paste a note of your choice
						to the note field when creating or updating an order
					</p>
					<p>
						Kindly know that the status, subject and note of: Pending and
						processing, should not be used to create and order note or update
						any order, it should only be send to client directly{" "}
						<strong>Via Email</strong>
					</p>{" "}
					before creating an order you should send the Pending status, subject
					and note to your client email, after some few hours then send the
					processing email to them. before you create an order with any status
					and note of your choice bellow. Thank you
				</div>
				{templates?.map((items, index) => (
					<div className='templates' key={index}>
						<p>Status: {items.status}</p>
						<p>Subject: {items.subject}</p>
						<p>Note: {items.content}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Account;
