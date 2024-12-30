import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

// Main Component
function DentingAndPainting() {
  const navigate = useNavigate(); // useNavigate hook for navigation

  // State Hooks for tracking form inputs
  const [serviceType, setServiceType] = useState("");
  const [vehicleInfo, setVehicleInfo] = useState({
    make: "",
    model: "",
    year: "",
    plate: "",
  });
  const [images, setImages] = useState([]);
  const [estimate, setEstimate] = useState(null);
  const [booking, setBooking] = useState({
    date: "",
    time: "",
  });

  // Handling form change for vehicle info
  const handleVehicleChange = (e) => {
    const { name, value } = e.target;
    setVehicleInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Handling service selection
  const handleServiceChange = (e) => {
    setServiceType(e.target.value);
  };

  // Handling file upload
  const handleImageUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setImages(uploadedFiles);
  };

  // Handling estimate submission
  const getEstimate = () => {
    let cost;
    let time;
    if (serviceType) {
      if (serviceType === "painting") {
        cost = 500;
        time = "5-7 days";
      } else if (serviceType === "dent") {
        cost = 200;
        time = "1-3 days";
      } else if (serviceType === "touchup") {
        cost = 100;
        time = "1-2 days";
      } else {
        cost = 0;
        time = "Unknown";
      }

      setEstimate({ cost, time });
    } else {
      setEstimate({ cost: 0, time: "Please select a service" });
    }
  };

  // Handling booking form submission and redirecting to payment gateway
  const handleBooking = (e) => {
    e.preventDefault();
    console.log("Booking details:", booking);
    
    // Logic for confirming booking
    // alert("Booking confirmed!");

    // Redirect to payment gateway after booking is confirmed
    // Replace '/payment' with the actual payment gateway URL or component path
    navigate("/paymentButton"); 
  };

  return (
    <div className="container">
      {/* Service Selection */}
      <div className="service-selection">
        <h2>Select Your Service</h2>
        <select value={serviceType} onChange={handleServiceChange}>
          <option value="">--Select Service--</option>
          <option value="dent">Dent Removal</option>
          <option value="painting">Full Body Painting</option>
          <option value="touchup">Touch-Up Painting</option>
        </select>
        <button onClick={getEstimate}>Get Estimate</button>
      </div>

      {/* Vehicle Information Form */}
      <div className="vehicle-info">
        <h2>Vehicle Information</h2>
        <input
          type="text"
          name="make"
          placeholder="Car Company"
          value={vehicleInfo.make}
          onChange={handleVehicleChange}
        />
        <input
          type="text"
          name="model"
          placeholder="Car Model"
          value={vehicleInfo.model}
          onChange={handleVehicleChange}
        />
        <input
          type="number"
          name="year"
          placeholder="Car Year"
          value={vehicleInfo.year}
          onChange={handleVehicleChange}
        />
        <input
          type="text"
          name="plate"
          placeholder="License Plate"
          value={vehicleInfo.plate}
          onChange={handleVehicleChange}
        />
      </div>

      {/* Image Upload Section */}
      <div className="image-upload">
        <h2>Upload Vehicle Images</h2>
        <input type="file" multiple onChange={handleImageUpload} />
      </div>

      {/* Estimate Section */}
      {estimate && (
        <div className="estimate">
          <h2>Estimated Cost & Timeline</h2>
          <p>Cost: ₹ {estimate.cost}</p>
          <p>Estimated Time: {estimate.time}</p>
        </div>
      )}

      {/* Booking Form */}
      <div className="booking">
        <h2>Book Your Service</h2>
        <form onSubmit={handleBooking}>
          <input
            type="date"
            value={booking.date}
            onChange={(e) => setBooking({ ...booking, date: e.target.value })}
            required
          />
          <input
            type="time"
            value={booking.time}
            onChange={(e) => setBooking({ ...booking, time: e.target.value })}
            required
          />
          <button type="submit">Confirm Booking</button>
        </form>
      </div>

      {/* Internal CSS */}
      <style jsx="true">{`
        /* Container Styles */
        .container {
          width: 80%;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        /* Title Styles */
        h2 {
          font-size: 1.8em;
          margin-bottom: 15px;
          color: #333;
        }

        /* Service Selection */
        .service-selection select, 
        .service-selection button {
          padding: 10px;
          margin: 5px 0;
          font-size: 1em;
          width: 100%;
          max-width: 300px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .service-selection button {
          background-color: #4CAF50;
          color: white;
          cursor: pointer;
          border: none;
        }

        .service-selection button:hover {
          background-color: #45a049;
        }

        /* Vehicle Information Form */
        .vehicle-info input {
          width: 100%;
          max-width: 400px;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        /* Image Upload Section */
        .image-upload input {
          width: 100%;
          max-width: 400px;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        /* Estimate Section */
        .estimate {
          background-color: #f4f4f4;
          padding: 15px;
          margin: 20px 0;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .estimate h2 {
          font-size: 1.6em;
          margin-bottom: 10px;
        }

        .estimate p {
          font-size: 1.2em;
          margin: 5px 0;
          color: #333;
        }

        /* Booking Form */
        .booking form {
          margin-top: 20px;
        }

        .booking input {
          width: 100%;
          max-width: 400px;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .booking button {
          width: 100%;
          max-width: 400px;
          padding: 12px;
          background-color: #007BFF;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .booking button:hover {
          background-color: #0056b3;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            width: 90%;
          }

          .service-selection select, 
          .service-selection button,
          .vehicle-info input, 
          .image-upload input,
          .booking input,
          .booking button {
            width: 100%;
            max-width: none;
          }
        }
      `}</style>
    </div>
  );
}

export default DentingAndPainting;
