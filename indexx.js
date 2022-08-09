import React from "react"
import ReactDom from "react-dom/client"
const Navbar= (

    <nav>
        <h1>commerce</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>            
        </ul>


    </nav>
)
//ReactDom.render(Navbar,document.getElementById("root"))
ReactDom.createRoot(document.getElementById("root")).render

const root = ReactDom.createRoot(document.getElementById("root"))
  root.render(Navbar)