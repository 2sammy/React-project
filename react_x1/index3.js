import raect from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"


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

