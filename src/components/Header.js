import portfolioIcon from "../images/portfolio_icon.png"
import linkedinIcon from "../images/linkedin_icon.png"
import emailIcon from "../images/email_icon.png"

export default function Header() {
    return (
        <header>
          <div id="title">
            <h1>Anto Benedetti</h1>
            <h3>Web 3.0 dApp developement assistant</h3>
            <p>Paris, France</p>
          </div>

          <div id="links">
            <button id="portfolio-btn">
              <img alt="Portfolio icon" width="20px" src={portfolioIcon}></img>
              <p>Portfolio</p>
            </button>
            <button id="linkedin-btn">
              <img alt="LinkedIn icon" width="20px" src={linkedinIcon}></img>
              <p>LinkedIn</p>
            </button>
            <button id="email-btn">
              <img alt="Email icon" width="25px" src={emailIcon}></img>
              <p>Send an email</p>
            </button>
          </div>
        </header>
    )
}