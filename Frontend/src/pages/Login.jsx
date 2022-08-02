import { useEffect } from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../register.css"
import axios from "axios"

function Register() {
    let obj = {
        email : "",  
        password : "",
    }
    
    const navigate = useNavigate()
    const [inputval, SetInputVal] = useState(obj);
    const [inputErrors, SetInputErrors] = useState({})
    const [submit, SetSubmit] = useState(false)
    const handleChange = (e) => {
        const {name , value} = e.target;
        SetInputVal({...inputval, [name] : value})
         console.log(inputval)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        SetInputErrors(validation(inputval))
        SetSubmit(true)
        login()
    }

    const validation = (val) => {
        const errors = {};

        if(!val.email){
            errors.email = "Email is required"
        }
        if(!val.password){
            errors.email = "Password is required"
        }
         
        return errors
    }

    useEffect(() => {

        if(Object.keys(inputErrors).length === 0 && submit){
            SetInputVal({...obj})
        }
    },[inputErrors])

    const login = async (req , res) => {
        await axios.post("http://localhost:5000/login", inputval)
        .then((dt) => {
            console.log("res", dt.data);
            alert("Login Sucess")
            navigate("/addproducts")
        })
        .catch((err) => {
            console.log(err.message)
            alert("some Technical error")
        })
    }

    return (
        <div id="f">
            <form onSubmit={handleSubmit}>
                <h1>Syoft</h1>
        
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
                        type="text" 
                        name = "password"
                        placeholder="Password"
                        value = {inputval.password}
                        onChange = {handleChange}
                    />
                </div><br />
                <p className="error">{inputErrors.password}</p>   
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Register