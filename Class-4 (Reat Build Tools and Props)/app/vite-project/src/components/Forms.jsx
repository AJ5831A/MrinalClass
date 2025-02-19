import { useState } from "react";
import "./Forms.css";

export default function Forms() {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
  return (
    <div className="form-container">
      <h2>Fill the Form</h2>
      <form onSubmit={(event)=>{event.preventDefault()
        console.log(name,email,password)
      }}>
        <div className="form-group">
          <label htmlFor="name">Name: 📇</label>
          <input type="text" id="name" name="name" value={name} onChange={(event)=>{setName(event.target.value)}} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email: 📧</label>
          <input type="email" id="email" name="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password: 🔐</label>
          <input type="password" id="message" name="message" value={password} onChange={(event)=>{setPassword(event.target.value)}} required />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
