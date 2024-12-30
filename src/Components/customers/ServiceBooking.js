import React, { useState } from 'react';

const ServiceBooking = () => {
    const [service, setService] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const services = ['Oil Change', 'Tire Rotation', 'Brake Inspection'];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Service:', service, 'Date:', date, 'Time:', time);
    };

    const styles = {
        container: {
            width: '80%',
            margin: '20px auto',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        },
        header: {
            textAlign: 'center',
            color: '#333',
            marginBottom: '20px'
        },
        sectionHeader: {
            fontSize: '20px',
            margin: '20px 0 10px',
            color: '#555',
            textDecoration: 'underline'
        },
        list: {
            listStyleType: 'none',
            padding: 0,
            margin: '0 0 20px'
        },
        listItem: {
            fontSize: '16px',
            color: '#444',
            padding: '5px 0'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        },
        label: {
            display: 'flex',
            flexDirection: 'column',
            fontSize: '16px',
            color: '#444'
        },
        select: {
            padding: '10px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '5px'
        },
        input: {
            padding: '10px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '5px'
        },
        button: {
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            alignSelf: 'flex-start',
            transition: 'background-color 0.3s'
        },
        buttonHover: {
            backgroundColor: '#0056b3'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Service Booking</h1>

            <h2 style={styles.sectionHeader}>Service List</h2>
            <ul style={styles.list}>
                {services.map((s, index) => (
                    <li key={index} style={styles.listItem}>{s}</li>
                ))}
            </ul>

            <h2 style={styles.sectionHeader}>Booking Form</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>
                    Service:
                    <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        style={styles.select}
                    >
                        <option value="">Select a service</option>
                        {services.map((s, index) => (
                            <option key={index} value={s}>{s}</option>
                        ))}
                    </select>
                </label>
                <label style={styles.label}>
                    Date:
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        style={styles.input}
                    />
                </label>
                <label style={styles.label}>
                    Time:
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        style={styles.input}
                    />
                </label>
                <button
                    type="submit"
                    style={styles.button}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                >
                    Book Service
                </button>
            </form>
        </div>
    );
};

export default ServiceBooking;