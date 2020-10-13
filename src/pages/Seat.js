import React, {useState} from 'react';
import { withRestaurantConsumer } from '../Context'
import { Redirect } from 'react-router-dom'

// import DatePicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css"

import SeatReservationAPI from '../API/SeatReservationAPI'
import Alert from '../components/Alert'

import Rest3 from '../assets/rest3.png';
import Logo from '../assets/restaurant.png';

const Seat = ({ context }) => {
  const [name, setName] = useState ('');
  const [dateTime, setDateTime] = useState ('');
  const [numberOfSeats, setnumberOfSeats] = useState ('');
  const [alert, setAlert] = useState ({show : false});

  if(!context.isUser){
    return <Redirect to='/' />
  }

  const handleSubmit = e => {
    e.preventDefault ();

    SeatReservationAPI({ name, dateTime, numberOfSeats }).then(response=>{
      if(response.status === 200){
        setAlert({show: true, type: 'success', text: 'Seat Reservation Successfully !'})
        setName (''); setDateTime (''); setnumberOfSeats ('');
      }else{
        setAlert({show: true, type: 'danger', text: 'Unable to Seat Reservation !'})
      }
      
      setTimeout(() => {
        setAlert({show: false})
      }, 3000);

    })
  };

  return (
    <>
      {alert.show && <Alert {...alert} />}
      
  
      <main className="container main mb-5" id="oneSeat">
        
        <div className="twoSeat">
          <p>Seat<br />Reservation</p>
          <img src={Rest3} width="120" height="120" alt="Restaurant" />
        </div>

        <form className="threeSeat" onSubmit={handleSubmit}>
          {/* <DatePicker 
          className="form-control"
          value=""
          selected=""
          onChange=""
          showTimeSelected
          timeFormat="HH:mm"
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption=""
        /> */}
          <div className="row">
            <div
              className="col-md-6 col-sm-12"
              style={{
                textAlign: 'center',
                borderRight: '3px solid rgb(61, 60, 60)',
              }}
            >
              <img
                src={Logo}
                width="250"
                height="200"
                style={{margin: '170px'}}
                alt="Logo"
              />
            </div>
            <div
              id="oneSeat"
              className="col-md-6 col-sm-12"
              style={{textAlign: 'center'}}
            >

              <h2><label htmlFor="name">Name of customer</label></h2>
              <input
                style={{marginBottom: '30px'}}
                type="text"
                id="name"
                placeholder="enter your name"
                autoFocus
                required
                value={name}
                onChange={e => setName (e.target.value)}
              />

              <h2><label htmlFor="datetime">Date and time of reservation</label></h2>
              <input
                style={{marginBottom: '30px'}}
                type="datetime-local"
                id="datetime"
                required
                value={dateTime}
                onChange={e => setDateTime (e.target.value)}
              />

              <h2><label htmlFor="select">Number of table</label></h2>
              <select
                name="select"
                id="select"
                value={numberOfSeats}
                onChange={e => setnumberOfSeats (e.target.value) }
              > 
                <option hidden>choose the seats</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <br /><br />
              <button className="btn btn-success">book</button>

            </div>
          </div>
        </form>;

      </main>
    </>
  );
};

export default withRestaurantConsumer(Seat);
