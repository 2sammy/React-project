import raect from "react"
import ReactDOM from "react-dom"

function Page() {
    return(
        <>
        <header>
            <nav>
                <img src="./react-logo.png" width="45px" />
            </nav>

        </header>
        <h1>Reasons am exicited to learn react</h1>
        <ol>
            <li>cool</li>
            <li>vibe</li>
            <li>easier to understand</li>
        </ol>
        <footer>
           <small> @ 2021 sanchez development. All rights reserved.</small>
        </footer>
        </>
    )
}

ReactDOM.render(<page/>, document.getElementById("root"))
