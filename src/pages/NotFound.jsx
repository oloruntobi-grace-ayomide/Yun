import { Link } from "react-router-dom"
import errorImg from '/error_img.svg'
function  NotFound(){
    return(
        <div className="error-page bg-[#F3F4F6] h-[100vh] w-full text-center  flex flex-col items-center justify-center px-[10px]">
            <div className="error-image-container mb-[30px]">
                <img src={errorImg} alt="error image"/>
            </div>
            <h1>Oops! This page took a wrong turn. 🤔 404</h1>
            <p>It seems the page you're looking for isn't here. Maybe it's off on a coffee break? ☕</p>
            <p>Don't worry, let's get you back on track:</p>
            <Link to="/" className="take-me-home">👉 Take me home!</Link>
        </div>
    )
}
export default NotFound