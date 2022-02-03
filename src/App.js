import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import profilePicture from "./images/profile_picture.jpg"

export default function App() {
    return (
        <>
          <img id="profile-picture" alt="Profile picture" width="390px"
          src={profilePicture}></img>
          <div id="card">
            <Header/>
            <Main/>
            <Footer/> 
          </div>
        </>
    )
}
