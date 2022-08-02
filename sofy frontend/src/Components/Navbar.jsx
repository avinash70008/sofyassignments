import React from 'react'

export const Navbar = () => {
    return(
        <div style={{
            "backgroundColor": "green",
            "textAlign": "center",
            "padding": "10px",
        }}>
            <ul style={{
                  "padding": "10px",
                  "display": "inline-flex",
                 "listStyle": "none",


            }}>
               <li style={{
                  "padding": "10px",
                  "marginLeft": "20px",
               }}><a style={{
                "textDecoration":"none",
                "color": "white"

                
               }} Link to="/">Home</a></li>


               <li style={{
                  "padding": "10px",
                  "marginLeft": "20px",
               }}><a style={{
                "textDecoration":"none",
                "color": "white"
               }} href=''>Login</a></li>
               <li style={{
                  "padding": "10px",
                  "marginLeft": "20px",
               }}><a style={{
                "textDecoration":"none",
                "color": "white"
               }} href='#'>SignUp</a></li>
            </ul>
        </div>
    )
}