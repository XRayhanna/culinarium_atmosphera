import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: new Date(),
    time: '',
    /*tableNumber: '',*/
    guests: '',
    phone: '',
    email: ''
  });

  const validateName = (name) => /^[a-zA-ZÀ-ÿ\s'-]+$/.test(name);
  const validatePhone = (phone) => /^\+?[0-9]{7,15}$/.test(phone);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !validateName(formData.firstName) ||
      !validateName(formData.lastName) ||
      /*formData.tableNumber <= 0 ||*/
      formData.guests <= 0 ||
      !validatePhone(formData.phone) ||
      !validateEmail(formData.email)
    ) {
      alert("Bitte überprüfen Sie Ihre Eingaben.");
      return;
    }

    // Prepare the data to be sent in the POST request
    const reservationData = {
      ...formData,
      date: formData.date.toISOString().split('T')[0], // Format date as 'YYYY-MM-DD'
    };

    try {
      const response = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      if (response.ok) {
        alert('Reservation wurde abgeschickt!');
      } else {
        alert('Reservation konnte nicht abgeschickt werden. Bitte erneut versuchen.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Es gab einen Fehler bei der Reservation. Bitte erneut versuchen.');
    }

    console.log(formData);
  };

  return (
    <section id='reservation' className="ftco-section ftco-wrap-about ftco-no-pb ftco-no-pt">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-sm-12 p-4 p-md-5 d-flex align-items-center justify-content-center glass">
            <form className="reservation-form appointment-form" onSubmit={handleSubmit}>
              <h3 className="mb-3">Reservierung</h3>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="form-group">
                    <div className="inputWrap">
                      <input
                        type="text"
                        placeholder="Vorname"
                        className="form-control"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        pattern="[a-zA-ZÀ-ÿ\s'-]+"
                        title="Der Vorname darf nur Buchstaben enthalten."
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Nachname"
                      className="form-control"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      pattern="[a-zA-ZÀ-ÿ\s'-]+"
                      title="Der Nachname darf nur Buchstaben enthalten."
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <DatePicker
                      selected={formData.date}
                      onChange={(date) => setFormData({ ...formData, date })}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="time"
                      className="form-control"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="number"
                      placeholder="Anzahl der Personen"
                      className="form-control"
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      min="1"
                      max="100"
                      title="Die Anzahl der Personen muss zwischen 1 und 20 liegen."
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="tel"
                      placeholder="Telefonnummer"
                      className="form-control"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      pattern="\+?[0-9]{7,15}"
                      title="Die Telefonnummer muss zwischen 7 und 15 Ziffern lang sein."
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                      title="Bitte geben Sie eine gültige Email-Adresse ein."
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <button type="submit" className="btn btn-white py-3 px-4">Reservieren</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
