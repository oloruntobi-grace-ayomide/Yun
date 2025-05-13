import { Link } from 'react-router-dom';
import Logo from '../assets/yun_logo.png';
function Footer (){
    const year = new Date().getFullYear();
    return (
    
        <footer className="footer-section parent"  data-aos="fade-up" data-aos-easing="ease-in-out">
    
        <div className="footer-child-1 space-y-6">
            <div className='img-container'>
                <img src={Logo} alt="Yun Capital Management Logo" />
            </div>
            <p>
                <span>Yun Capital Management</span>
                <br/>
                Building new economies worldwide
            </p>
            <div className="space-x-5 footer-icon-box">

                <a aria-label="Facebook" className="nav-link-icon" href="/" title='Facebook'>🅕</a>

                <a aria-label="X" className="nav-link-icon" href="/" title='LinkedIn'>🅛</a>

                <a aria-label="Email" className="nav-link-icon" href="mailto:info@yuncapital.com" target='_blank' title='Email'>✉</a>

            </div>
        </div>
        <hr />
        <p className='mt-[30px] text-center text-[#ffffff]'>© {year} Yun Capital Management. All rights reserved.</p>
        <p className='text-center text-[#ffffff]'><a className='text-[#ffffff]' href="#">Privacy Policy</a> | <a className='text-[#ffffff]' href="#">Terms of Service</a></p>
        <p className='text-center text-[#ffffff]'>Contact: info@yuncapital.com | 212.877.3920</p>
        </footer>
    )
}

export default Footer