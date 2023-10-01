import React ,{useState} from 'react'

export default function Login(props) {
const [loginForm, setLoginForm] = useState(false);
const toggleLoginForm =()=>{
    setLoginForm(!loginForm);
    if(!loginForm){
        document.body.style.overflowY ="hidden";
    }
    else{
        document.body.style.overflowY ="scroll";

    }
}
  return (
    <div className={`login ${props.margin}`}>
          <button type="button" className="btn" onClick={toggleLoginForm}>
          <i className={`${props.visible} fa-regular  fa-user`}></i>
          {props.title}  
          </button>
         {loginForm && ( <div className='login-model'>
        <div className='overlay d-flex justify-content-center align-items-center'>
            <div className='login-contant container'>
             <form>
                <div className="form-outline mb-4">
                  <input type="email" id="email" className="form-control" />
                  <label className="form-label" for="email">Email address</label>
                </div>
                <div className="form-outline mb-4">
                   <input type="password" id="password" className="form-control" />
                   <label className="form-label" for="password">Password</label>
                </div>
                <div className="d-flex justify-content-center flex-wrap  mb-4">
                    <div className="col d-flex justify-content-center">
                       <div className="form-check">
                         <input className="form-check-input" type="checkbox" value="" id="rememberme" />
                         <label className="form-check-label" for="rememberme"> Remember me </label>
                       </div>
                    </div>
                    <div className="col forgot">
                     <a href="#!">Forgot password?</a>
                    </div>
                </div>
                <button type="submit" className="btn login-submit btn-primary btn-block mb-4">Sign in</button>
             </form>
            </div>
            <button className='close-model'onClick={toggleLoginForm}>
               <i className="fas fa-close"></i>
            </button>
        </div>    
        </div>)}
       </div>
  )
}
