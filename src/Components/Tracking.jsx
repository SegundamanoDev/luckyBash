import React, {useState} from "react";
import "./Tracking.css";

const Tracking = () => {
	const [senderName, setSenderName] = useState("");
	const [senderContact, setSenderContact] = useState("");
	const [senderEmail, setSenderEmail] = useState("");
	const [senderAddress, setSenderAddress] = useState("");
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

	const handleSubmit = (e) => {
		e.preventDefault();
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
						<input
							type='text'
							name='senderName'
							id='senderName'
							placeholder='Sender Name'
							value={senderName}
							onChange={(e) => setSenderName(e.target.value)}
						/>
						<input
							type='text'
							name='senderContact'
							id='senderContact'
							placeholder='Sender Contact'
							value={senderContact}
							onChange={(e) => setSenderContact(e.target.value)}
						/>
						<input
							type='email'
							name='senderEmail'
							id='senderEmail'
							placeholder='Sender Email'
							value={senderEmail}
							onChange={(e) => setSenderEmail(e.target.value)}
						/>
						<input
							type='text'
							name='senderAddress'
							id='senderAddress'
							placeholder='Sender Address'
							value={senderAddress}
							onChange={(e) => setSenderAddress(e.target.value)}
						/>
					</div>
					<h2>Other Info</h2>
					<div className='input_info'>
						<select onChange={(e) => setStatus(e.target.value)}>
							<option value='pending'>Pending</option>
							<option value='active'>Active</option>
							<option value='inactive'>InActive</option>
							<option value='pickedup'>Picked Up</option>
							<option value='arrived'>Arrived</option>
							<option value='delivered'>Delivered</option>
							<option value='onHold'>On Hold</option>
						</select>
						<input
							type='text'
							name=''
							id=''
							placeholder='Dispatched Location'
							value={dispatchLocation}
							onChange={(e) => setDispatchLocation(e.target.value)}
						/>
						<input
							type='email'
							name=''
							id=''
							placeholder='Carrier'
							value={carrier}
							onChange={(e) => setCarrier(e.target.value)}
						/>
						<input
							type='text'
							name=''
							id=''
							placeholder='Carrier Reference Number'
							value={refNumber}
							onChange={(e) => setRefNumber(e.target.value)}
						/>
						<input
							type='text'
							name=''
							id=''
							placeholder='Weight (add unit e.g KG)'
							value={weight}
							onChange={(e) => setWeight(e.target.value)}
						/>
						<input
							type='text'
							name=''
							id=''
							placeholder='Payment Mode'
							value={paymentMode}
							onChange={(e) => setPaymentMode(e.target.value)}
						/>
						<input
							type='file'
							accept='image/*'
							placeholder='Image'
							onChange={handleFileChange}
						/>
					</div>
				</form>
				<form>
					<h2>Receiver Info</h2>
					<div className='input_info'>
						<input
							type='text'
							name=''
							id=''
							value={receiverName}
							onChange={(e) => setReceiverName(e.target.value)}
							placeholder='Receiver Name'
						/>
						<input
							type='text'
							name=''
							id=''
							value={receiverContact}
							onChange={(e) => setReceiverContact(e.target.value)}
							placeholder='Receiver Contact'
						/>
						<input
							type='email'
							name=''
							id=''
							value={receiverEmail}
							onChange={(e) => setReceiverEmail(e.target.value)}
							placeholder='Receiver Email'
						/>
						<input
							type='text'
							name=''
							id=''
							value={receiverAddress}
							onChange={(e) => setReceiverAddress(e.target.value)}
							placeholder='Receiver Address'
						/>
					</div>
					<h2>Other Info</h2>
					<div className='input_info'>
						<input
							type='text'
							name=''
							id=''
							value={destination}
							onChange={(e) => setDestination(e.target.value)}
							placeholder='Destination'
						/>
						<input
							type='text'
							name=''
							id=''
							value={packageDesc}
							onChange={(e) => setPackageDesc(e.target.value)}
							placeholder='Package Description'
						/>
						<input
							type='date'
							name=''
							id=''
							value={dispatchDate}
							onChange={(e) => setDispatchDate(e.target.value)}
							placeholder='Dispatched Date'
						/>
						<input
							type='text'
							name=''
							id=''
							value={deliveryDate}
							onChange={(e) => setCarrier(e.target.value)}
							placeholder='Estimated Delivery Date'
						/>
						<input
							type='text'
							name=''
							id=''
							value={shipmentMode}
							onChange={(e) => setShipmentMode(e.target.value)}
							placeholder='Shipment Mode'
						/>
						<input
							type='text'
							name=''
							id=''
							value={quantity}
							onChange={(e) => setQuantity(e.target.value)}
							placeholder='Quantity'
						/>
						<input
							type='time'
							name=''
							id=''
							value={deliveryTime}
							onChange={(e) => setDeliveryTime(e.target.value)}
							placeholder='Delivery Time'
						/>
					</div>
				</form>
			</div>
			<button>Add</button>
		</div>
	);
};

export default Tracking;
