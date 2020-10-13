import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { withRestaurantConsumer } from '../../Context'

import Alert from '../../components/Alert'

function Sign({context}) {
    
    const { Signup, isUser} = context

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity]   = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [terms, setTerms] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [alert, setAlert] = useState({ show: false })
    
    if (isUser) {
      return <Redirect from="/signup" to="/" />
    }

    const handleChange = (e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
          setAlert({ show:true, type: 'danger', text: 'password and confirm password not matched each other !' })
          setTimeout(() => {
            setAlert({ show: false })
          }, 3000);

        }
        else{
          Signup({ fName, lName, phone, email, city, state, zip, password })
          console.log('Signup component after login >>>> ', isUser);
        }
    }

    return (
      <main>
        { alert.show && <Alert type={alert.type} text={alert.text} /> }
        <form
          className="container p-5 text-center mt-3 mb-5"
          style={{
            backgroundColor: 'rgb(70, 67, 67)',
            color: 'rgb(146, 243, 107)',
            borderRadius: '20px'
          }}
          onSubmit={handleChange}
        >
          <div className="form-row justify-content-md-center mb-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                style={{textAlign: 'left'}}
                required
                autoFocus
                value={fName}
                onChange={(e)=>setFName(e.target.value)}
              />
            </div>

            <div className="col-md-6 ">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                style={{textAlign: 'left'}}
                required
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row justify-content-md-center  mb-5">

            <div className="col-md-6 ">
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                style={{textAlign: 'left'}}
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="col-md-6 ">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    @
                  </span>
                </div>
                <input
                  placeholder="Email"
                  type="email"
                  className="form-control"
                  style={{textAlign: 'left'}}
                  aria-describedby="inputGroupPrepend2"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-row justify-content-md-center  mb-5">

            <div className="col-md-6 ">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                autoComplete="on"
                style={{textAlign: 'left'}}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="col-md-6 ">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                autoComplete="on"
                style={{textAlign: 'left'}}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

          
          </div>

          <div className="form-row">
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                style={{textAlign: 'left'}}
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="col-md-4 mb-3">
              <input
                placeholder="state"
                type="text"
                className="form-control"
                id="validationDefault04"
                style={{textAlign: 'left'}}
                refs="state"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>

            <div className="col-md-4 mb-3">
              <input
                placeholder="zip"
                type="text"
                className="form-control"
                id="validationDefault05"
                style={{textAlign: 'left'}}
                refs="zip"
                required
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
          </div>


          <div className="form-group mb-3">
            <div className="form-check ">
              <input
                className="form-check-input"
                type="checkbox"
                id="invalidCheck2"
                required
                style={{textAlign: 'left', width: '50'}}
                onChange={(e)=> setTerms(!terms)}
                checked = {terms}
              />
              <label
                className="form-check-label"
                htmlFor="invalidCheck2"
                style={{width: '500px'}}
              >
                Agree to terms and conditions
              </label>
            </div>
          </div>

          <button className="btn btn-success" type="submit">
            Submit form
          </button>
        </form>
      </main>
    );

}

export default withRestaurantConsumer(Sign)