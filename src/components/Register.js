import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import {useRef, useState} from 'react'



function Register(props) {
  const userName = useRef(null)
  const password = useRef(null)
  const password_confirmation = useRef(null)
  const displayName = useRef(null)
  const pic = useRef(null)

  const [ form, setForm ] = useState({})
  const [ errors, setErrors ] = useState({})

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
    // Check and see if errors exist, and remove them from the error object:
    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  }

  const renderSubmit = () => {
    if (Object.keys(findFormErrors()).length > 0) {
      return (
        <input type="button"
          value="WELCOME"
          onKeyDown={() => handleSubmit(findFormErrors())}
          onClick={() => handleSubmit(findFormErrors())}
        />
      )
    } else {
      return (
        <Link to='/chat'>
          <input type="button"
            value="WELCOME"
            onKeyDown={() => handleSubmit(findFormErrors())}
            onClick={() => handleSubmit(findFormErrors())}
          />
        </Link>
      )
    }
  }

  const findFormErrors = () => {
    const { name, password, displayName, pic } = form
    const newErrors = {}
    // userName errors
    if ( !name || name === '' ) newErrors.name = 'enter username!'
    // password errors
    if ( !password && password === '') newErrors.password = 'enter password!'
    else if ( !(/[^0-9]+/.test(password) && /[^A-Za-z]+/.test(password))) newErrors.password = 'password must include numbers and letters!'
    // password confirmation errors
    if ( (password !== password_confirmation) && password ) newErrors.password_confirmation = 'passwords do not match'
    // dispalyName errors
    if ( (!displayName || displayName === '') && !newErrors.name ) setField('displayName', name)
    //profile pic errors TODO
    if ( !pic ) setField('pic', "aviad_cat.png")
    else if ( !pic.match(/\.(jpg|jpeg|png|gif)$/)) newErrors.pic = 'enter profile pic'
    
    return newErrors
  }

  const handleSubmit = e => {
    const newErrors = findFormErrors()
    if ( Object.keys(newErrors).length > 0 ) {
      setErrors(newErrors)
    } else {
        props.users.push({                                    
            userName:userName.current.value,
            password: password.current.value,
            displayName: displayName.current.value,
            pic: pic.current.value,
            contacts:[]
          });
          props.setOnline(userName.current.value) 
    }
    return false;
  }
  return (
    <div>
      <div className="body"></div>
      <div className="grad"></div>
      <div className="header">
        <div>Chat<span>App</span></div>
      </div>
      <br />
      <div className="login">
        <input type="text" placeholder="Username" name="userName"
          ref={userName}
          onChange={e => setField('name', e.target.value)}
        /><br />
        <div className="error" style={{ color: 'red' }}>{errors.name}</div>

        <input type="password" placeholder="Password" name="password"
          ref={password}
          onChange={e => setField('password', e.target.value)}
        /><br />
        <div className="error" style={{ color: 'red' }}>{errors.password}</div>

        <input type="password" placeholder="confirm password" name="password_confirmation"
          ref={password_confirmation}
          onChange={e => setField('password_confirmation', e.target.value)}
        /><br />
        <div className="error" style={{ color: 'red' }}>{errors.password_confirmation}</div>

        <input type="displayName" placeholder="display name" name="displayName"
          ref={displayName}
          onChange={e => setField('displayName', e.target.value)}
        /><br />
        <div className="error" style={{ color: 'red' }}>{errors.displayName}</div> 

        <input type="file" placeholder="Enter profile picture" name="pic"
          ref={pic}
          onChange={e => setField('pic', e.target.value)}
        /><br />
        <div className="error" style={{ color: 'red' }}>{errors.pic}</div>
   
        {renderSubmit()}
        <div style={{ color: 'white' }}>Already a member?&nbsp;
          <Link to="/">
            Click Here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
