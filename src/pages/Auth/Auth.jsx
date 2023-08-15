import React from 'react'
import './Auth.css'
import Logo from '../../img/mylogo.png'

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" className='rotate'/>
            <div className="Webname">
                <h1>friendNet</h1>
                <h6>Connect with them amigos</h6>
            </div>
        </div>
        {/* <SignUp /> */}
        <LogIn />
    </div>
  )
}

function SignUp(){
    return (
        <div className="a-right">
            <form className='inforForm authForm'>

                <h3>SignUp</h3>
                <div>
                    <input type="text" 
                    placeholder='FirstName'
                    className='infoInput' name='firstname' />

                    <input type="text" 
                    placeholder='LastName'
                    className='infoInput' name='lastname' />
                </div>

                <div>
                    <input type="text" className="infoInput"
                    name='username'
                    placeholder='Usernames'/>
                </div>

                <div>
                    <input type="text" className="infoInput"
                    name='password'
                    placeholder='password' />

                    <input type="text" className="infoInput"
                    name='confirmpass'
                    placeholder='confirm-password' />
                </div>

                <div>
                    <span style={{fontSize: '12px'}}>Already have an acount? Login</span>
                    <button className="button infoButton" type='submit'>SignUp</button>
                </div>
            </form>
        </div>
    )
}

function LogIn(){
     return(
        <div className="a-right">
            <form className="inforForm authForm">
                <h3>Log In</h3>

                <div>
                    <input type="text"
                    placeholder='Username'
                    className="infoInput"
                    name='username' />
                </div>

                <div>
                    <input type="password" className="infoInput"
                    placeholder='Password'
                    name='password' />
                </div>

                <div>
                    <span style={{fontSize: '12px'}}>
                        Don't have an account? Register
                    </span>
                    <button className="button infoButton">Login</button>
                </div>
            </form>
        </div>
     )
}

export default Auth