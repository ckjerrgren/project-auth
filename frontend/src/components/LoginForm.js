import React, { useState } from 'react'

const URL = 'https://project-auth-cla-ellen.herokuapp.com/sessions'

export const LoginForm = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({name, password}),
      headers: { "Content-Type" : "application/json" }
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.log("error:", err ))
  }

  // FORMULÄR FÖR SIGN IN 
return (
    <section className="form">
        <form>
            <h1>Login!</h1>
            <label>
                Name 
                <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
            </label>
            <label>
                password
                <input 
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
            </label> 
            <button type="submit" onClick={handleLogin}>
                Login
            </button> 
        </form>
    </section>

)

}