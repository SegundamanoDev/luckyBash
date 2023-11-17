import React, {useState, useEffect} from "react";
import "./GetTracking.css";
import {useDispatch, useSelector} from "react-redux";
import {FindOrder} from "../Redux/slices/orderSlice";
import refImg from "../assets/ref-number-img.jpg";
import MapComponent from "./MapComponent";

const GetTracking = () => {
	const [trackNumberId, setTrackNumberId] = useState("");
	const dispatch = useDispatch();
	const {order, loading, error} = useSelector((state) => state.order);

	const handleSubmitId = async (e) => {
		e.preventDefault();
		setTrackNumberId("");
		await dispatch(FindOrder(trackNumberId));
	};
	return (
		<div className='track-order-container'>
			<div className='top-side'>
				<h2>Track & Trace</h2>
			</div>
			<div className='trackNUmber_inp_container' data-aos='zoom-in'>
				<h2>
					Track & <span>Trace Shipment</span>
				</h2>
				<p>Enter Tracking Number Here</p>
				<form onSubmit={handleSubmitId}>
					<input
						type='text'
						placeholder='Enter your tracking number...'
						value={trackNumberId}
						onChange={(e) => setTrackNumberId(e.target.value)}
					/>
					<button type='submit'>Track</button>
				</form>
			</div>
			<hr />

			{loading && <h2>Loading. . .</h2>}
			{error && <p>{error}</p>}
			{order._id && (
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
								<p>
									{" "}
									<strong>{order?.updatedTime}</strong>
								</p>
							</div>
							<div className='ref-icon-numb'>
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
								style={{width: "200px", height: "200px"}}
							/>
							<h2>Tracking Number: {order?.refNumber}</h2>
						</div>
					</div>

					<div className='send-receiver-info'>
						<div className='infos'>
							<h2>Shipper Information</h2>
							<div className='info'>
								<p>Name: {order?.senderName}</p>
								<p>Address: {order?.senderAddress}</p>
								<p>Phone Number: {order?.senderContact}</p>
								<p>Email: {order?.senderEmail}</p>
							</div>
						</div>
						<div className='infos'>
							<h2>Receiver Information</h2>
							<div className='info'>
								<p>Name: {order?.receiverName}</p>
								<p>Address: {order?.receiverAddress}</p>
								<p>Phone Number: {order?.receiverContact}</p>
								<p>Email: {order?.receiverEmail}</p>
							</div>
						</div>
					</div>
					<div className='big-border-middle'>
						<h3>SHIPMENT STATUS - {order?.status}</h3>
					</div>

					<div className='shipment-information'>
						<h2>Shipment Information</h2>
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
			)}
		</div>
	);
};

export default GetTracking;
