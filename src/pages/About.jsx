import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Cta from "../components/Cta"
import founder from "../assets/yun_owner.jpg"
import dataChart from "../assets/data_chart.png"
function  About(){
    return(
        <Layout>
             {/* hero section */}
            
            <section className="hero-section-small parent about-section">
                <div className="relative z-[100] hero-section-small-content">
                    <h1>About Yun</h1>
                    <p>Building Wealth with Confidence</p>
                    <Link to='/contact-us' className='action-butt'>Schedule a Consultation <span className="icon">➜</span></Link>
                </div>
            </section>

            {/* mission section */}
            <section className="mission parent" data-aos="fade-up" data-aos-easing='ease-in-out'>
                <h3>➤ Our Mission: Building Wealth with Confidence</h3>
                <p>At Yun Capital Management, we are dedicated to creating the best diversified portfolios that deliver outstanding results while prioritizing risk control. Our conservative investment strategy is designed to protect your investments from industry and economic downturns, ensuring stability and measurable growth. By sourcing a carefully curated selection of global investments, spanning both traditional and non-traditional asset classes. We achieve independence from economic fluctuations and focus on reliable, viable growth opportunities worldwide.</p>
            </section>

            {/* approach section */}
            <section className="approach parent" data-aos="fade-up" data-aos-easing='ease-in-out'>
                <div>
                <h3>➤ Our Approach</h3>
                <p>We believe that prudent investing starts with discipline and foresight. Our team meticulously selects investments from dynamic markets and industries, ensuring each portfolio is robust and resilient. Whether it's through established asset classes or innovative opportunities, our goal is to provide clients with peace of mind and consistent performance, no matter the economic climate.</p>
                </div>
                <img src={dataChart} alt="Abstract investment chart" loading="lazy"></img>
            </section>
            
            {/* leadership section */}
            <section className="leadership parent" data-aos="fade-up" data-aos-easing='ease-in-out'>
                <img src={founder} alt="Jung Yun, Managing Director" />
                <div>
                <h3>➤ Leadership</h3>
                <p>Jung Yun has more than twenty years of experience in finance and banking, including investment banking, private equity, venture investing, and portfolio asset management. As Managing Director of Yun Capital, she brings expertise from high-stakes global transactions and is a recognized leader in international finance. A graduate of the University of Tennessee, Ms. Yun is committed to guiding clients with world-class investment solutions</p>
                </div>
            </section>
         
             {/* <!-- CTA Section --> */}
            <Cta>
                 <h2 className="cta-home-header investment-cta-header">Ready to Get Started?</h2>
            </Cta>
        </Layout>
    )
}

export default About