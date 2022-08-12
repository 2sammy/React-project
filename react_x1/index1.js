import React from "react"
import ReactDOM from "react-dom"
const page = (
    <div>
        <img src="./react-logo.png" width = "45px"/>
        <h1>facts About react</h1>
        <ul>
            <li>was first released</li>
            <li>was originally created by jordan walker</li>
            <li>has well over 100k stars on git hub</li>
            <li> is maintained by facebook</li>
        </ul>

    </div>
)
ReactDOM.render(page, document.getElementById("root"))

// another way
function TemporaryName(){
    return (
 <div>
    <img src="./react-logo.png" width = "45px"/>
    <h1>facts About react</h1>
    <ul>
        <li>was first released</li>
        <li>was originally created by jordan walker</li>
        <li>has well over 100k stars on git hub</li>
        <li> is maintained by facebook</li>
    </ul>
</div>
    )
}
React.render(<TemporaryName />, document.getElementById("root"))