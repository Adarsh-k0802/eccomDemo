import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import "./Register.css"

function Login() {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div class="login-box">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />
            <label>Email</label>
          </div>
          <div class="user-box">
            <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput}/>
            <label>Password</label>
          </div>
          <button type="submit" class="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
          <a href="/register" >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Register
          </a>
        </form>
      </div>
    )
}

export default Login
