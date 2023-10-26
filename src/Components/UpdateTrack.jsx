import React, {useState} from "react";
import "./UpdateTrack.css";

const UpdateTrack = () => {
	const [status, setStatus] = useState("");
	const [currentLocation, setCurrentLocation] = useState("");
	const [updatedDate, setUpdatedDate] = useState("");
	const [updatedTime, setUpdatedTime] = useState("");
	const [deliveryCharges, setDeliveryCharges] = useState("");
	const [totalCharges, setTotalCharges] = useState("");
	const [deliveryNote, setDeliveryNote] = useState("");
	return (
		<div className='container'>
			<form>
				<div className='form_input_field'>
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
						value={currentLocation}
						onChange={(e) => setCurrentLocation(e.target.value)}
					/>
					<input
						type='text'
						name=''
						id=''
						value={updatedDate}
						onChange={(e) => setUpdatedDate(e.target.value)}
						placeholder='Estimated Delivery Date'
					/>
					<input
						type='time'
						name=''
						id=''
						value={updatedTime}
						onChange={(e) => setUpdatedTime(e.target.value)}
						placeholder='Delivery Time'
					/>
					<input
						type='text'
						name=''
						id=''
						value={deliveryCharges}
						onChange={(e) => setDeliveryCharges(e.target.value)}
						placeholder='Delivery Charges'
					/>

					<input
						type='text'
						name=''
						id=''
						value={totalCharges}
						onChange={(e) => setTotalCharges(e.target.value)}
						placeholder='Total Charges'
					/>
					<input
						type='text'
						name=''
						id=''
						value={deliveryNote}
						onChange={(e) => setDeliveryNote(e.target.value)}
						placeholder='Delivery Noted'
					/>
				</div>
				<button type='submit'>Update</button>
			</form>
		</div>
	);
};

export default UpdateTrack;
