import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import "./Register.css"

function Register() {
    const [user, setUser] = useState({
        name:'', email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-box">
        <h2>Register</h2>
        <form>
        <div className="user-box">
            <input input type="text" name="name" required
                placeholder="Username" value={user.name} onChange={onChangeInput}/>
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput}/>
            <label>Email-Id</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput}/>
            <label>Password</label>
          </div>
         
          <button type='submit' className="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
          <a href="/login">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
        </form>
      </div>
    )
}

export default Register