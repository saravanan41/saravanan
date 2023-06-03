import React, { useState } from 'react'
import './login.css'

function Login() {

  const admin = {
    username: "admin",
    password: "admin123"
  }

  const [data, setData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({...data, [name]: value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (data.username === admin.username && data.password === admin.password) {
      alert("Admin Login Success!")
    } else {
      alert("Admin Login Faild!")
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <span>Login Page</span>
          </div>
          <div>
            <label htmlFor="username">User Name</label>
            <input type="text" name='username' onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" name='password' onChange={handleChange} />
          </div>
          <div>
            <button type='submit'>Login</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login