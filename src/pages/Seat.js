import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'

import { UserContext } from '../Context/User';
// import DatePicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css"

import SeatReservationAPI from '../API/SeatReservationAPI'
import Alert from '../components/Alert'

import Rest3 from '../assets/rest3.png';
import Logo from '../assets/restaurant.png';
import { scrollAutoFromBackToTop } from '../components/ScrollButton';

const Seat = () => {
  const history = useHistory()
  const {isUser, alert, showAlert} = React.useContext(UserContext)
  const [name, setName] = useState ('');
  const [dateTime, setDateTime] = useState ('');
  const [numberOfSeats, setnumberOfSeats] = useState ('');

  const isEmpty = !name || !dateTime || !numberOfSeats || alert.show

  React.useEffect(() => {
    scrollAutoFromBackToTop()
  }, [])

  const handleSubmit = e => {
    e.preventDefault ();

    SeatReservationAPI({ name, dateTime, numberOfSeats }).then(response=>{
      if(response.status === 200){
        showAlert({show: true, type: 'success', msg: 'Seat Reservation Successfully !'})
        setName (''); setDateTime (''); setnumberOfSeats ('');
      }else{
        showAlert({show: true, type: 'danger', msg: 'Unable to Seat Reservation !'})
      }
      
      setTimeout(() => {
        showAlert({show: false})
      }, 3000);

    })
  };

  return (
    <>
      <main className="container main mb-5" id="oneSeat">
        
        <div className="twoSeat">
          <p>Seat<br />Reservation</p>
          <img src={Rest3} width="120" height="120" alt="Restaurant" />
        </div>

        
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
        <form className="threeSeat" onSubmit={handleSubmit}>
          <div className="row">
            <div
              className="d-none d-sm-none d-lg-block col-lg-6"
              style={{
                textAlign: 'center',
                borderRight: '3px solid rgb(61, 60, 60)',
              }}
            >
              <div className="shadowItemWithoutBox">
                <img
                  src={Logo}
                  width="250"
                  height="200"
                  style={{margin: '170px'}}
                  alt="Logo"
                />
              </div>
            </div>
            
            <div
              id="oneSeat"
              className="col-lg-6 col-sm-12"
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

              {/* empty form text */}
              {
                isEmpty &&
                <div className="row mt-2">
                  <div className="col-md form-group">
                    <p className="form-empty">Please fill out all form fields</p>
                  </div>
                </div>
              }

              {/* login link */}
              {
                !isUser &&
                <div className="row">
                  <div className="col-md form-group">
                    <p className="register-link">
                      Need to login first
                      <Link to="/login" className="text-decoration-none">
                        click here
                      </Link>
                    </p>
                  </div>
                </div>
              }

              <br /> <br />

              {/* Button */}
              {
                !isEmpty && isUser &&
                <button className="btn btn-success btn-lg">book</button>
              }
            </div>
          </div>
        </form>

      </main>
    </>
  );
};

export default Seat;
