// import logo from "../../images/";//static importing
import "./header.css";
const Header=()=>{
    return (
        <>
        <nav className="header">
            <section className='logo'>   
            <img src={require("../../images/icon.png")} alt="logo"></img>
            </section>
             <div className="InstaName">instaclone</div>
            <section className="camera-icon">
            <img src={require("../../images/camera.png")} alt="camera"></img>
                </section>
        </nav>
        </>
    )
}
export default Header;