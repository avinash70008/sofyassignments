import { useEffect } from "react";
import { useState } from "react"
import "../register.css"
import axios from "axios"

function Register() {
    let obj = {
        product_name : "",
        product_price : "",
        prod_desc : "",
        inventory_count : Number,
    }

    const [inputval, SetInputVal] = useState(obj);
    
    const handleChange = (e) => {
        const {name , value} = e.target;
        SetInputVal({...inputval, [name] : value})
        // console.log(inputval)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        addproducts()
    }

    const addproducts = async (req , res) => {
        await axios.post("http://localhost:2345/products/addproduct", inputval)
        .then((dt) => {
            console.log("res", dt.data);
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <div id="f">
            <form onSubmit={handleSubmit}>
                <h1>Syoft</h1>
                <div>
                    <input 
                        type="text" 
                        name = "product_name"
                        placeholder="Product_Name"
                        value = {inputval.product_name}
                        onChange = {handleChange}
                    />
                </div>
        
                <div>
                    <input 
                        type="email" 
                        name = "product_price"
                        placeholder="Product_price"
                        value = {inputval.product_price}
                        onChange = {handleChange}
                    />
                </div>

                <div>  
                    <input 
                        type="number" 
                        name = "inventory_count"
                        placeholder="In stock"
                        value = {inputval.prod_desc}
                        onChange = {handleChange}
                    />
                </div><br />
                <div> 
                    <textarea 
                        placeholder="Description"
                        name="message"
                        value = {inputval.prod_desc}
                        onChange = {handleChange}
                    />
                </div><br />
               
                <div>
                    <button >Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default Register