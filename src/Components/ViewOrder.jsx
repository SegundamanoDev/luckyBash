import React, {useEffect} from "react";
import "./ViewOrder.css";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {GetOrder} from "../Redux/slices/orderSlice";
import refImg from "../assets/ref-number-img.jpg";
import MapComponent from "./MapComponent";

const ViewOrder = () => {
	const dispatch = useDispatch();
	const {order, loading, error} = useSelector((state) => state.order);
	const {id} = useParams();

	useEffect(() => {
		dispatch(GetOrder(id));
	}, [dispatch, id]);

	return (
		<div className='view_orderCont'>
			{loading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			<>
				<div className='view-top'>
					<div className='dates-time'>
						<div className='date-fmt'>
							<div className='date-active-dot'>
								<p>
									On this day <strong>{order?.updatedDate} </strong>
								</p>
								<div className='active'></div>
							</div>
						</div>
						<div className='currnt-note'>
							<p>
								Your package is currently at{" "}
								<strong>{order?.currentLocation}</strong>
							</p>
							<p>
								<strong>Delivery Note:</strong> <br /> {order?.note}
							</p>
						</div>
					</div>
					<div className='ref-numb-icon'>
						<img
							src={refImg}
							alt='refImg'
							style={{width: "100px", height: "100px"}}
						/>
						<p>Tracking Number: {order?.refNumber}</p>
					</div>
				</div>

				<div className='send-receiver-info'>
					<div className='infos'>
						<p>Shipper Information</p>
						<div className='info'>
							<p>Name: {order?.senderName}</p>
							<p>Address: {order?.senderAddress}</p>
							<p>Phone Number: {order?.senderContact}</p>
							<p>Email: {order?.senderEmail}</p>
						</div>
					</div>
					<div className='infos'>
						<p>Receiver Information</p>
						<div className='info'>
							<p>Name: {order?.receiverName}</p>
							<p>Address: {order?.receiverAddress}</p>
							<p>Phone Number: {order?.receiverContact}</p>
							<p>Email: {order?.receiverEmail}</p>
						</div>
					</div>
				</div>
				<div className='big-border-middle'>
					<p>SHIPMENT STATUS - {order?.status}</p>
				</div>

				<div className='shipment-information'>
					<p>Shipment Information</p>
					<div className='shipmnt-lists'>
						<div className='list'>
							<span>
								<p>Origin:</p>
								<p>{order?.dispatchLocation}</p>
							</span>

							<span>
								<p>Carrier:</p>
								<p>{order?.carrier}</p>
							</span>

							<span>
								<p>Carrier Reference Number:</p>
								<p>{order?.refNumber}</p>
							</span>
						</div>
						<div className='list'>
							<span>
								<p>Shipment Mode:</p>
								<p>{order?.shipmentMode}</p>
							</span>

							<span>
								<p>Expected Delivery Date:</p>
								<p>{order?.deliveryDate}</p>
							</span>

							<span>
								<p>Delivery Time:</p>
								<p>{order?.deliveryTime}</p>
							</span>
						</div>
						<div className='list'>
							<span>
								<p>Status:</p>
								<p>{order?.status}</p>
							</span>

							<span>
								<p>Weight:</p>
								<p>{order?.weight}</p>
							</span>

							<span>
								<p>Quantity:</p>
								<p>{order?.quantity}</p>
							</span>
						</div>
						<div className='list'>
							<span>
								<p>Destination:</p>
								<p>{order?.destination}</p>
							</span>

							<span>
								<p>Dispatch Date:</p>
								<p>{order?.dispatchDate}</p>
							</span>
							<span>
								<p>Package:</p>
								<p>{order?.packageDesc}</p>
							</span>
						</div>
					</div>
				</div>
				<img
					src={order?.orderImg?.secure_url}
					alt='picsd'
					className='cont-img'
				/>
				{order && order?.latitude && order?.longitude && (
					<MapComponent
						latitude={order?.latitude}
						longitude={order?.longitude}
						location={order?.currentLocation}
					/>
				)}
			</>
		</div>
	);
};

export default ViewOrder;
