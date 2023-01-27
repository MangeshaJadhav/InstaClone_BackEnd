import { Link } from "react-router-dom";
import landingImage from "../../images/lens.png"
import "./landing-page.css";

const Landing = () => {
    return (
        <>
            <div className="landing">
                <div className="landing-images">
                    <img src={landingImage} alt="landingImage" />
                </div>
                <div className="landing-actions">
                    <div className="landing-text">
                        10x Mangesh Jadhav
                    </div>
                    <Link to="/post-view">
                        <div className="button">
                            <button>Enter</button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Landing;