import { Link } from "react-router-dom"
function Cta({ children }){
    return(
        <section className="cta" data-aos="fade-up" data-aos-easing="ease-in-out">
        <div className="cta-content">
            {children}
            <Link to="/contact-us" className="action-butt">Contact Us <span className="icon">➜</span></Link>
        </div> 
    </section>
    )
}

export default Cta