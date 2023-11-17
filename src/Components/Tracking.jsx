import React, {useState} from "react";
import "./Tracking.css";
import {useDispatch, useSelector} from "react-redux";
import {CreateOrder} from "../Redux/slices/orderSlice";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const Tracking = () => {
	const dispatch = useDispatch();

	const [senderName, setSenderName] = useState("");
	const [senderContact, setSenderContact] = useState("");
	const [senderEmail, setSenderEmail] = useState("");
	const [senderAddress, setSenderAddress] = useState("");
	const [note, setNote] = useState("");
	const [status, setStatus] = useState("");
	const [dispatchLocation, setDispatchLocation] = useState("");
	const [carrier, setCarrier] = useState("");
	const [refNumber, setRefNumber] = useState("");
	const [weight, setWeight] = useState("");
	const [paymentMode, setPaymentMode] = useState("");
	const [packageImage, setPackageImage] = useState("");

	const [receiverName, setReceiverName] = useState("");
	const [receiverContact, setReceiverContact] = useState("");
	const [receiverEmail, setReceiverEmail] = useState("");
	const [receiverAddress, setReceiverAddress] = useState("");
	const [destination, setDestination] = useState("");
	const [packageDesc, setPackageDesc] = useState("");
	const [dispatchDate, setDispatchDate] = useState("");
	const [deliveryDate, setDeliveryDate] = useState("");
	const [deliveryTime, setDeliveryTime] = useState("");
	const [shipmentMode, setShipmentMode] = useState("");
	const [quantity, setQuantity] = useState("");
	const [currentLocation, setCurrentLocation] = useState("");
	const [updatedDate, setUpdatedDate] = useState("");
	const [updatedTime, setUpdatedTime] = useState("");
	const [latitude, setLatitude] = useState("");
	const [longitude, setLongitude] = useState("");

	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			CreateOrder({
				senderName,
				senderContact,
				senderEmail,
				senderAddress,
				note,
				status,
				dispatchLocation,
				carrier,
				refNumber,
				weight,
				paymentMode,
				orderImg: packageImage,
				receiverName,
				receiverContact,
				receiverEmail,
				receiverAddress,
				destination,
				packageDesc,
				dispatchDate,
				deliveryDate,
				deliveryTime,
				shipmentMode,
				quantity,
				currentLocation,
				updatedDate,
				updatedTime,
				latitude,
				longitude,
			})
		);
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			convertToBase64(file);
		}
	};
	const convertToBase64 = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = (e) => {
			const base64String = e.target.result;
			setPackageImage(base64String);
		};
	};

	return (
		<div className='tracking'>
			<div className='tracking_wrapper'>
				<form>
					<h2>Sender Info</h2>
					<div className='input_info'>
						<div className='lab-inp-wrapper'>
							<label>Sender Name</label>
							<input
								type='text'
								placeholder='Sender Name'
								value={senderName}
								onChange={(e) => setSenderName(e.target.value)}
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Sender Contact</label>
							<input
								type='text'
								placeholder='Sender Contact'
								value={senderContact}
								onChange={(e) => setSenderContact(e.target.value)}
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Sender Email</label>
							<input
								type='email'
								placeholder='Sender Email'
								value={senderEmail}
								onChange={(e) => setSenderEmail(e.target.value)}
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Sender Address</label>
							<input
								type='text'
								placeholder='Sender Address'
								value={senderAddress}
								onChange={(e) => setSenderAddress(e.target.value)}
							/>
						</div>
					</div>
					<h2>Other Info</h2>
					<div className='input_info'>
						<div className='lab-inp-wrapper'>
							<label>Order Note</label>
							<input
								type='text'
								placeholder='Order Note'
								value={note}
								onChange={(e) => setNote(e.target.value)}
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Status</label>
							<select onChange={(e) => setStatus(e.target.value)}>
								<option value='Pending'>Pending</option>
								<option value='Processing'>Processing</option>
								<option value='Shipped'>Shipped</option>
								<option value='Out For Delivery'>Out For Delivery</option>
								<option value='Delivered'>Delivered</option>
								<option value='On Hold'>On Hold</option>
								<option value='Canceled'>Canceled</option>
							</select>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Dispatched Location</label>
							<input
								type='text'
								placeholder='Dispatched Location'
								value={dispatchLocation}
								onChange={(e) => setDispatchLocation(e.target.value)}
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Carrier</label>
							<input
								type='text'
								placeholder='Carrier'
								value={carrier}
								onChange={(e) => setCarrier(e.target.value)}
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Tracking Number</label>
							<input
								type='text'
								placeholder='Carrier Reference Number'
								value={refNumber}
								onChange={(e) => setRefNumber(e.target.value)}
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Weight</label>
							<input
								type='text'
								placeholder='Weight (add unit e.g KG)'
								value={weight}
								onChange={(e) => setWeight(e.target.value)}
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Latitude</label>
							<input
								type='text'
								placeholder='Latitude'
								value={latitude}
								onChange={(e) => setLatitude(e.target.value)}
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Longitude</label>
							<input
								type='text'
								placeholder='Longitude'
								value={longitude}
								onChange={(e) => setLongitude(e.target.value)}
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Payment Method</label>
							<input
								type='text'
								placeholder='Payment Mode'
								value={paymentMode}
								onChange={(e) => setPaymentMode(e.target.value)}
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Product Image</label>
							<input
								type='file'
								accept='image/*'
								placeholder='Image'
								onChange={handleFileChange}
							/>
						</div>
					</div>
				</form>
				<form>
					<h2>Receiver Info</h2>
					<div className='input_info'>
						<div className='lab-inp-wrapper'>
							<label>Receiver Name</label>
							<input
								type='text'
								value={receiverName}
								onChange={(e) => setReceiverName(e.target.value)}
								placeholder='Receiver Name'
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Receiver Contact</label>
							<input
								type='text'
								value={receiverContact}
								onChange={(e) => setReceiverContact(e.target.value)}
								placeholder='Receiver Contact'
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Receiver Email</label>
							<input
								type='email'
								value={receiverEmail}
								onChange={(e) => setReceiverEmail(e.target.value)}
								placeholder='Receiver Email'
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Receiver Address</label>
							<input
								type='text'
								value={receiverAddress}
								onChange={(e) => setReceiverAddress(e.target.value)}
								placeholder='Receiver Address'
							/>
						</div>
					</div>
					<h2>Other Info</h2>
					<div className='input_info'>
						<div className='lab-inp-wrapper'>
							<label>Client Country</label>
							<input
								type='text'
								value={destination}
								onChange={(e) => setDestination(e.target.value)}
								placeholder='Destination'
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Package Description</label>
							<input
								type='text'
								value={packageDesc}
								onChange={(e) => setPackageDesc(e.target.value)}
								placeholder='Package Description'
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Shipped Date</label>
							<input
								type='date'
								value={dispatchDate}
								onChange={(e) => setDispatchDate(e.target.value)}
								placeholder='Dispatched Date'
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Delivery Date</label>
							<input
								type='date'
								value={deliveryDate}
								onChange={(e) => setDeliveryDate(e.target.value)}
								placeholder='Estimated Delivery Date'
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Shipment Mode</label>
							<input
								type='text'
								value={shipmentMode}
								onChange={(e) => setShipmentMode(e.target.value)}
								placeholder='Shipment Mode'
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Quantity</label>
							<input
								type='text'
								value={quantity}
								onChange={(e) => setQuantity(e.target.value)}
								placeholder='Quantity'
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Delivery Time</label>
							<input
								type='time'
								value={deliveryTime}
								onChange={(e) => setDeliveryTime(e.target.value)}
								placeholder='Delivery Time'
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Current Location</label>
							<input
								type='text'
								value={currentLocation}
								onChange={(e) => setCurrentLocation(e.target.value)}
								placeholder='Current Location'
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Updated Date</label>
							<input
								type='text'
								value={updatedDate}
								onChange={(e) => setUpdatedDate(e.target.value)}
								placeholder='Updated Date'
							/>
						</div>
						<div className='lab-inp-wrapper'>
							<label>Updated Time</label>
							<input
								type='time'
								value={updatedTime}
								onChange={(e) => setUpdatedTime(e.target.value)}
								placeholder='Updated Time'
							/>
						</div>
					</div>
				</form>
			</div>
			<button type='submit' onClick={handleSubmit}>
				Add
			</button>
		</div>
	);
};

export default Tracking;
