import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { withRestaurantConsumer } from '../../Context'
import Alert from '../../components/Alert'


const LogIn = ( {context} ) => {
    const { Login, isUser } = context

    // password, email
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // eslint-disable-next-line 
    const [alert, setAlert] = useState({ show: false })


    const handleSubmit = async (e) => {
        e.preventDefault ();
        
        
        Login({email, password})
        console.log('login component after login >>>> ', isUser);

        // if(!isUser){
        //     setAlert({ show: true, type: 'danger', text: 'Unable to Login' })
        //     setTimeout(() => {
        //         setAlert({ show: false })
        //     }, 3000);
        // }

    };

    if (isUser) {
        return <Redirect from="/login" to="/" />
    }
    return (
        <main>
            {alert.show && <Alert type={alert.type} text={alert.text} />}
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
                        autoFocus
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
                    type="password"
                    className="form-control"
                    style={{textAlign: 'left'}}
                    id="validationDefault01"
                    placeholder="Enter your Password"
                    required
                    autoComplete="on"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                </div>
        
                
        
                
        
                <button className="btn btn-success" type="submit">Submit form</button>
            </form>
        
            </main>
        );

}

export default withRestaurantConsumer(LogIn)