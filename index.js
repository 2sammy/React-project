//ReactDOM.render(<h1>hello samuel</h1>, document.getElementById("root"))
// ReactDOM.render(<h>sammy</h1>, document.getElementById(sammy))
ReactDOM.render(<ul>
                <li>first name</li>
                <li>second name</li>
                <li> third name</li>
                </ul>, document.getElementById("root"))
function MainContent(){
    return(
        <h1>iam learning </h1>
    )
}
ReactDOM.render(<div>
        <Navbar  />
        <MainContent />



</div>)     
 const h1 = document.createElement("h1")
 h1.textContent = "this is imperative way program" //imperative
 h1.className = "header"
 document.getElementById("root").append(h1)

 //declarative
 ReactDOM.render(<h1 className="header">hello sammy</h1>, document.getElementById("root"))

 // why react is declarative
 //JSX
 ReactDOM.render(<h1 className="footer">this is jsx</h1>, document.getElementById("root"))
 const h1 = document.getElementById
 h1.textContent = "hello react"
 h1.className =  "footer"
 console.log(element)

 ReactDOM.render(<h1 className ="footer">hello react</h1>, document.getElementById("root"))
const h1 = document.getElementById
h1.textContent = "hi sammy"
h1. className = "footer"
console.log(element)
ReactDOM.render(<p className="footer">hi sammy</p>)

const element = <h1 className="footer">this is JSX</h1>
ReactDOM.render(element,document.getElementById("root"))

const page = (
    <div>

        <h1 className="header">this is jsx</h1>
        <p>this is paragraph</p>
    </div>
)
ReactDOM.render(
    page, document.getElementById("root")
) 
//ReactDOM.render(<p>i love js</p>,docu)
ReactDOM.render(
    <di>
    <h1 className="header">hello</h1>
    <p>hello there</p>
    </di>, document.getElementById("roots")

)
const Navbar = (
    <nav>
        <h1>commerce</h1>
        <ul>
            <li>Contact</li>
            <li>Pricing</li>
            <li>About</li>
        </ul>
    </nav>
)
ReactDOM.render(nav,document.getElementById("roots"))
