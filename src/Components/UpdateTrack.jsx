import React, {useState} from "react";
import "./UpdateTrack.css";
import {useDispatch} from "react-redux";
import {UpdateOrder} from "../Redux/slices/orderSlice";
import {useParams} from "react-router-dom";

const UpdateTrack = () => {
	const dispatch = useDispatch();
	const [status, setStatus] = useState("");
	const [currentLocation, setCurrentLocation] = useState("");
	const [updatedDate, setUpdatedDate] = useState("");
	const [updatedTime, setUpdatedTime] = useState("");
	const [deliveryCharges, setDeliveryCharges] = useState("");
	const [totalCharges, setTotalCharges] = useState("");
	const [deliveryNote, setDeliveryNote] = useState("");
	const {id} = useParams();

	const handleUpdate = (e) => {
		e.preventDefault();
		dispatch(
			UpdateOrder({
				id: id,
				body: {
					status,
					currentLocation,
					updatedDate,
					updatedTime,
					deliveryCharges,
					totalCharges,
					deliveryNote,
				},
			})
		);
	};
	return (
		<div className='container'>
			<form>
				<div className='form_input_field'>
					<div className='lab-inp-wrapper'>
						<label>Update Status</label>
						<select onChange={(e) => setStatus(e.target.value)}>
							<option value='pending'>Pending</option>
							<option value='active'>Active</option>
							<option value='inactive'>InActive</option>
							<option value='pickedup'>Picked Up</option>
							<option value='arrived'>Arrived</option>
							<option value='delivered'>Delivered</option>
							<option value='onHold'>On Hold</option>
						</select>
					</div>
					<div className='lab-inp-wrapper'>
						<label>Current Location</label>
						<input
							type='text'
							placeholder='Current Location'
							value={currentLocation}
							onChange={(e) => setCurrentLocation(e.target.value)}
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
					<div className='lab-inp-wrapper'>
						<label>Delivery Charges</label>
						<input
							type='text'
							value={deliveryCharges}
							onChange={(e) => setDeliveryCharges(e.target.value)}
							placeholder='Delivery Charges'
						/>
					</div>

					<div className='lab-inp-wrapper'>
						<label>Total Charges</label>
						<input
							type='text'
							value={totalCharges}
							onChange={(e) => setTotalCharges(e.target.value)}
							placeholder='Total Charges'
						/>
					</div>
					<div className='lab-inp-wrapper'>
						<label>Note</label>
						<input
							type='text'
							value={deliveryNote}
							onChange={(e) => setDeliveryNote(e.target.value)}
							placeholder='Updated Note'
						/>
					</div>
				</div>
				<button type='submit' onClick={handleUpdate}>
					Update
				</button>
			</form>
		</div>
	);
};

export default UpdateTrack;
