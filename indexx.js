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

const page = (
    <div>
        <h>my awesome learning</h>
        <h>God will make it</h>
        <ol>
            <li> it' possible</li>
            <li>i can do it</li>
            <li>i belive in God</li>
            <li>its doable</li>
        </ol>



    </div>
)
document
const root = ReactDom.createRoot(document.getElementById("root"))
  root.render(Navbar)