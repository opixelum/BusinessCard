import ReactDOM from "react-dom"
import App from './App.js'
import "./css/style.css"

const root = document.querySelector("#root")

ReactDOM.render(<App/>, root)

const portfolioBtn = document.querySelector("#portfolio-btn")
portfolioBtn.addEventListener("click", function() {
    window.open("https://opixelum.github.io/MyPortfolio")
})

const linkedinBtn = document.querySelector("#linkedin-btn")
linkedinBtn.addEventListener("click", function() {
    window.open("https://linkedin.com/in/anto-benedetti")
})

const emailBtn = document.querySelector("#email-btn")
emailBtn.addEventListener("click", function() {
    window.open("mailto:anto.benedetti@protonmail.com")
})
