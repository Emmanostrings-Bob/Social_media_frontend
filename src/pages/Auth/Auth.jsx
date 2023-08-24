import React, { useState } from 'react'
import './Auth.css'
import Logo from '../../img/mylogo.png'
import  { useSelector, useDispatch} from 'react-redux'
import { logIn, signUp } from '../../actions/AuthAction';

const Auth = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.authReducers.loading); // Use 'auth' as the key

    console.log(loading)
    const [isSignUp, setIsSignUp] = useState(true);
    
    
    const [data, setData]=useState({firstname: "", lastname: "", username: "", password: "", confirmpass: ""})

    const [confirmpass, setConfirmPass] =useState(true)
    const handleChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    };
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(isSignUp){
           data.password === data.confirmpass ? dispatch(signUp(data)) : 
           setConfirmPass(false);
        }else {
            dispatch(logIn(data))
        }
    }

    const resetForm=()=>{
        setConfirmPass(true);
        setData({firstname: "", lastname: "", username: "", password: "", confirmpass: ""})
    }

    return (
        <div className="Auth">
            {/* LeftSide */}
            <div className="a-left">
                <img src={Logo} alt="" className='rotate'/>
                <div className="Webname">
                    <h1>friendNet</h1>
                    <h6>Connect with them amigos</h6>
                </div>
            </div>

            {/* RightSide */}
            <div className="a-right">
                <form className='inforForm authForm' onSubmit={handleSubmit}> 

                    <h3>{isSignUp ? "SignUp" : "Log in"}</h3>
                    
                        {isSignUp && 
                        <div>
                            <input type="text" 
                            placeholder='FirstName'
                            className='infoInput' name='firstname'
                            onChange={handleChange} 
                            value={data.firstname}/>

                            <input type="text" 
                            placeholder='LastName'
                            className='infoInput' name='lastname'
                            onChange={handleChange}
                            value={data.lastname} />
                        </div>
                    }
                        

                    <div>
                        <input type="text" className="infoInput"
                        name='username'
                        placeholder='Usernames'
                        onChange={handleChange}
                        value={data.username}/>
                    </div>

                    <div>
                        <input type="password" className="infoInput"
                        name='password'
                        placeholder='password' 
                        onChange={handleChange}
                        value={data.password}/>

                        {isSignUp && 
                        <input type="password" className="infoInput"
                        name='confirmpass'
                        placeholder='confirm-password'
                        onChange={handleChange}
                        value={data.confirmpass} />
                        }
                    
                    </div>
                    <span style={{display: confirmpass? 'none': 'block', color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "5px"}}>
                        *Confirm password does not match your password
                    </span>

                    <div>
                        <span style={{fontSize: '12px', cursor: "pointer"}} onClick={()=>
                            
                            {setIsSignUp((prev)=>!prev); resetForm()}}>
                            { isSignUp? "Already have an acount? Login" : "Don't have an account? SignUp"}
                        </span>
                        <button className="button infoButton" type='submit' disabled = {loading}>
                            {loading ? "Loading..." : isSignUp ? "Signup" : "Log in"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}




export default Auth