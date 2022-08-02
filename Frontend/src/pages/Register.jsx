import { useEffect } from "react";
import { useState } from "react"
import "../register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Register() {
    let obj = {
        username : "",
        email : "",
        mobile : "",
        password : "",
        role : ""
    }
    
    const navigate = useNavigate()
    const [inputval, SetInputVal] = useState(obj);
    const [inputErrors, SetInputErrors] = useState({})
    const [submit, SetSubmit] = useState(false)
    const handleChange = (e) => {
        const {name , value} = e.target;
        SetInputVal({...inputval, [name] : value})
       
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        SetInputErrors(validation(inputval))
        SetSubmit(true)
      
        register()
    }

    const register = async (req , res) => {
        await axios.post("http://localhost:5000/register", inputval)
        .then((dt) => {
            alert("Register Sucessful")
            console.log("res", dt.data);
            navigate("/login")
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    const validation = (val) => {
        const errors = {};

        if(!val.email){
            errors.email = "Email is required"
        }
         
        return errors
    }

    useEffect(() => {

        if(Object.keys(inputErrors).length === 0 && submit){
            SetInputVal({...obj})
        }
    },[inputErrors])

    return (
        <div id="f">
            <form onSubmit={handleSubmit}>
                <h1>Syoft</h1>
                <div>
                    <input 
                        type="text" 
                        name = "username"
                        placeholder="Username"
                        value = {inputval.username}
                        onChange = {handleChange}
                    />
                </div>
                <p className="error">{inputErrors.name}</p>
        
                <div>
                    <input 
                        type="email" 
                        name = "email"
                        placeholder="Email"
                        value = {inputval.email}
                        onChange = {handleChange}
                    />
                </div>
                <p className="error">{inputErrors.email}</p>

                <div>  
                    <input 
                        type="number" 
                        name = "mobile"
                        placeholder="Mobile"
                        value = {inputval.mobile}
                        onChange = {handleChange}
                    />
                </div><br />
                <div> 
                    <input 
                        type="text" 
                        name = "password"
                        placeholder="Password"
                        value = {inputval.password}
                        onChange = {handleChange}
                    />
                </div><br />
                <div>  
                    
                <select name={"role"} value={inputval.value} onChange={handleChange}>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="staff">Staff</option>
                </select>
                </div><br />
                <div>
                    <button >Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register