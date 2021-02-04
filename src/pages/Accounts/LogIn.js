import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../Context/User';
import { loginUser, signUser } from '../../API/User'

import { scrollAutoFromBackToTop } from '../../components/ScrollButton'

function Login() {
  const history = useHistory()
  const { userLogin, isUser, alert, showAlert } = React.useContext(UserContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('default')
  const [phone, setPhone] = useState('default')
  const [city, setCity] = useState('default')
  const [state, setState] = useState('default')
  const [zip, setZip] = useState('default')
  const [confirmPassword, setConfirmPassword] = useState('default')
  const [image, setImage] = useState('default')
  // const [terms, setTerms] = useState(false)

  const [isMember, setIsMember] = useState(true)
  const isEmpty = !email || !password || !userName || !phone || !city || !state || !zip || !confirmPassword || !image || alert.show;

  React.useEffect(() => {
    scrollAutoFromBackToTop()
    if(isUser){
      history.push('/')
    }
  }, [])

  const handleSubmit = async (e) => {
    // setLoading(true)
    e.preventDefault()
    let response;
    if(isMember){
      response = await loginUser({ email, password })
    }else{
      if (password !== confirmPassword) {
        showAlert({
          msg: "your password not match your re-password. please try again...",
          type: "danger"
        });
        // setLoading(false)
        setPassword('')
        setConfirmPassword('')
        return 0;
      }
      else {
        response = await signUser({userName, phone, email, password, city, state, zip, image})
      }
    }
    if(response.status === 200){
      const {
        user,
        token
      } = response.data
      userLogin({ user, token })
      showAlert({
        msg: `you are logged in : ${user.userName}. browse away my friend`
      });
      history.push('/')
    }else{
      showAlert({
        msg: "there was an error. please try again...",
        type: "danger"
      });
    }
    // setLoading(false)
  }



  const toggleMember = ()=>{
    setIsMember((prevMember)=>{
      if(prevMember === true){
        setEmail('')
        setPassword('')
        setUserName('')
        setCity('')
        setState('')
        setZip('')
        setPhone('')
        setConfirmPassword('')
        setImage('')
      }else{
        setEmail('')
        setPassword('')
        setUserName('default')
        setCity('default')
        setZip('default')
        setState('default')
        setPhone('default')
        setConfirmPassword('default')
        setImage('default')
      }

      setIsMember(!prevMember)
    })
  }

  return (
    <main>
      <form
        className="container p-5 text-center mt-3 mb-5"
        style={{
          backgroundColor: 'rgb(70, 67, 67)',
          color: 'rgb(146, 243, 107)',
          borderRadius: '20px'
        }}
        onSubmit={handleSubmit}
      >

        {/* userName */}
        {
          !isMember &&
          <div className="form-row justify-content-md-center">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                style={{ textAlign: 'left' }}
                required
                autoFocus
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            {/* Phone */}
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                style={{ textAlign: 'left' }}
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          }

        <div className="form-row justify-content-md-center">
          {/* Email */}
          <div className="col-md-6 mb-3">
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
                style={{ textAlign: 'left' }}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Image */}
          {
            !isMember &&
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Image link from Google Drive"
                style={{ textAlign: 'left' }}
                required
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          }
          </div>

      <div className="form-row justify-content-md-center">
          {/* password */}
          <div className="col-md-6 mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              autoComplete="on"
              style={{ textAlign: 'left' }}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          {
            !isMember &&
            <div className="col-md-6 mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                autoComplete="on"
                style={{ textAlign: 'left' }}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          }
        </div>

        {/* City */}
        {
          !isMember &&
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                style={{ textAlign: 'left' }}
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            {/* State */}
            <div className="col-md-4 mb-3">
              <input
                placeholder="state"
                type="text"
                className="form-control"
                id="validationDefault04"
                style={{ textAlign: 'left' }}
                refs="state"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>

            {/* Zip */}
            <div className="col-md-4 mb-3">
              <input
                placeholder="zip"
                type="text"
                className="form-control"
                id="validationDefault05"
                style={{ textAlign: 'left' }}
                refs="zip"
                required
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
          </div>
          }

        {/* empty form text */}
        {
          isEmpty &&
          <div className="row">
            <div className="col-md form-group mb-3">
              <p className="form-empty">Please fill out all form fields</p>
            </div>
          </div>
        }

        {/* Button */}
        {
          !isEmpty &&
          <button className="btn btn-success" type="submit">
            {isMember ? "Login " : "Sign up "}
          </button>
        }
        {/* register link */}
        <div className="row">
          <div className="col-md form-group mb-3">
            <p className="register-link">
              {isMember ? "Need to register " : "Already a member "}
              <span onClick={toggleMember}>
                click here
              </span>
            </p>
          </div>
        </div>

      </form>
    </main>
  );

}

export default Login