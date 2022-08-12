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
ReactDOM.createRoot(document.getElementById("root")).render(Navbar)

const page = (
    <div>
        <h1>my awesome learning</h1>
        <h2>God will make it</h2>
        <ol>
            <li> it' possible</li>
            <li>i can do it</li>
            <li>i belive in God</li>
            <li>its doable</li>
        </ol>



    </div>
)
ReactDom.render(page, document.getElementById("root"))
//const root = ReactDom.createRoot(document.getElementById("root"))
  //root.render(Navbar)
