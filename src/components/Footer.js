import twitterLogo from "../images/twitter_logo.png"
import githubLogo from "../images/github_logo.png"

export default function Footer() {
    return (
        <footer>
          <a href="https://twitter.com/Opixelum" target="_blank">
            <img alt="Twitter logo" width="40px"
            src={twitterLogo}></img>
          </a>
          <a href="https://github.com/Opixelum" target="_blank">
            <img alt="GitHub logo" width="40px"
            src={githubLogo}></img>
          </a>
        </footer>
    )
}
