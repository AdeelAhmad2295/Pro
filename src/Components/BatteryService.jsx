import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BatteryService() {
  const navigate = useNavigate();

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

  const handleVehicleChange = (e) => {
    const { name, value } = e.target;
    setVehicleInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (e) => {
    setServiceType(e.target.value);
  };

  const handleImageUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setImages(uploadedFiles);
  };

  const getEstimate = () => {
    if (serviceType) {
      let cost;
      let time;

      if (serviceType === "basic") {
        cost = 1000;
        time = "1-2 hours";
      } else if (serviceType === "advanced") {
        cost = 2000;
        time = "2-3 hours";
      } else {
        cost = 0;
        time = "Unknown";
      }

      setEstimate({ cost, time });
    } else {
      setEstimate({ cost: 0, time: "Please select a service" });
    }
  };

  const handleBooking = (e) => {
    e.preventDefault();
    console.log("Booking details:", booking);
    // alert("Booking confirmed!");
    navigate("/paymentButton");
  };

  return (
    <div className="container">
      <div className="service-selection">
        <h2>Select Your Battery Service</h2>
        <select value={serviceType} onChange={handleServiceChange}>
          <option value="">--Select Service--</option>
          <option value="basic">Basic Battery Service</option>
          <option value="advanced">Advanced Battery Service</option>
        </select>
        <button onClick={getEstimate}>Get Estimate</button>
      </div>

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

      <div className="image-upload">
        <h2>Upload Vehicle Images</h2>
        <input type="file" multiple onChange={handleImageUpload} />
      </div>

      {estimate && (
        <div className="estimate">
          <h2>Estimated Cost & Timeline</h2>
          <p>Cost: ₹ {estimate.cost}</p>
          <p>Estimated Time: {estimate.time}</p>
        </div>
      )}

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
      <style jsx="true">{`
        .container {
          font-family: Arial, sans-serif;
          padding: 20px;
          margin: 20px auto;
          max-width: 800px;
          background-color: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
          font-size: 1.8rem;
          color: #333;
          text-align: center;
          margin-bottom: 15px;
        }

        .service-selection,
        .vehicle-info,
        .image-upload,
        .estimate,
        .booking {
          margin-bottom: 20px;
          padding: 15px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        select,
        input[type="text"],
        input[type="number"],
        input[type="date"],
        input[type="time"],
        input[type="file"] {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        select:focus,
        input:focus {
          border-color: #4caf50;
          outline: none;
        }

        button {
          width: 100%;
          padding: 12px;
          font-size: 1rem;
          color: #fff;
          background-color: #4caf50;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #45a049;
        }

        .estimate {
          background-color: #e8f5e9;
          color: #333;
          padding: 15px;
          border-radius: 8px;
        }

        .estimate p {
          font-size: 1.1rem;
          margin-bottom: 5px;
        }

        @media (max-width: 768px) {
          .container {
            padding: 10px;
          }

          h2 {
            font-size: 1.5rem;
          }

          button {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default BatteryService;
