import React, {useState} from 'react';
import validator from 'validator'
import ContactAPI from '../API/ContactAPI'
import Alert from '../components/Alert'
import { scrollAutoFromBackToTop } from '../components/ScrollButton';
import { UserContext } from '../Context/User';


const ContactUS = () => {
  const { alert, showAlert } = React.useContext(UserContext)
  // name, email, message, subject
  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [subject, setSubject] = useState ('');
  const [message, setMessage] = useState ('');

  const isEmpty = !name || !email || !subject || !message || alert.show

  React.useEffect(() => {
    scrollAutoFromBackToTop()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault ();

    if (validator.isEmail(email)){
      const response = await ContactAPI({ name, email, subject, message })
      if (response.status === 200) {
        setTimeout(() => {
          showAlert({ type: 'success', msg: 'Send Successfully !' })
          setName(''); setEmail(''); setSubject(''); setMessage('')
        }, 500);
      } else {
        setTimeout(() => {
          showAlert({ type: 'danger', msg: 'Unable to send mail !' })
        }, 500);
      }
    }else{
      setTimeout(() => {
        showAlert({ type: 'danger', msg: 'Enter a valid email !' })
      }, 500);
    }
  };
  

  return (
    <main>
      {alert.show && <Alert {...alert}/>}
      <form
        className="container p-4 text-center mt-3 mb-5"
        style={{
          backgroundColor: 'rgb(70, 67, 67)',
          color: 'rgb(146, 243, 107)',
          borderRadius: '20px',
        }}
        onSubmit={handleSubmit}
      >

        <div className="form-row justify-content-md-center mb-4">
          <div className="col-md-6 col-sm-12">
            <input
              type="text"
              className="form-control"
              style={{textAlign: 'left'}}
              id="validationDefault01"
              placeholder="Enter your name"
              required
              autoFocus
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row justify-content-md-center mb-4">
          <div className="col-md-6">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupPrepend2">
                  @
                </span>
              </div>
              <input
                placeholder="email"
                type="email"
                style={{textAlign: 'left'}}
                className="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="form-row justify-content-md-center mb-4">
          <div className="col-md-6 col-sm-12">
            <input
              type="text"
              className="form-control"
              style={{textAlign: 'left'}}
              id="validationDefault01"
              placeholder="Enter your subject"
              required
              value={subject}
              onChange={(e)=>setSubject(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <textarea
            className="form-control w-100"
            style={{maxHeight: '200px'}}
            id="exampleFormControlTextarea1"
            placeholder="Enter your message"
            rows="8"
            cols="30"
            required 
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          />
        </div>

        {/* empty form text */}
        {
          isEmpty &&
          <div className="row">
            <div className="col-md form-group mb-1">
              <p className="form-empty">Please fill out all form fields</p>
            </div>
          </div>
        }

        {
          !isEmpty &&
          <button className="btn btn-success" type="submit">Submit form</button>
        }
      </form>

    </main>
  );
};

export default ContactUS;
