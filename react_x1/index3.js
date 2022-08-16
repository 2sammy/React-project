import raect from "react"
import ReactDOM from "react-dom"


function Header(){
    return(
        <header>
    <nav className = "nav">
        <img src="./react-logo.png" class="logo"/>
        <ul class = "nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>


        </ul>
    </nav>
</header>
    )
}

 function Footer(){
    return(
        <small> @ 2021 sanchez development. All rights reserved.</small>
    )
 }

function MainContent(){
    return(
        <div>
        <h1>Reasons am exicited to learn react</h1>
        <ol>
            <li>cool</li>
            <li>vibe</li>
            <li>easier to understand</li>
        </ol>
        </div>
    )
}
ReactDOM.render(<Header/>,document.getElementById("root"))




function Page() {
    return(
    <>
        <Header />

        <MainContent />
        <footer />
        </>
    )
}


ReactDOM.render(<page/>, document.getElementById("root"))

