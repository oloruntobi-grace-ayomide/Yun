import { useRef , useState } from "react";
import emailjs from "emailjs-com";
import Layout from "../components/Layout";
import loader from '../assets/loader.svg'


const Toast = ({ message, type, onClose }) => {
    return (
        <div className="fixed inset-0 z-[1000000] m-auto sm:w-[350px] sm:h-[250px] w-[280px] h-[220px] flex flex-col justify-center items-center px-4 py-2 rounded-md shadow-lg text-center bg-[#fff]">
            <p className="sm:text-[50px] text-[40px] mb-[30px]">{type === "success" ? "✅" : "❌"}</p>
            <p className="text-[18px]">{message}</p>
            <button className="ml-4 text-[18px] bg-[#003087] px-[50px] py-[8px] mt-[20px] text-white 
            hover:bg-[#3B82F6]" 
            onClick={onClose}>Okay</button>
        </div>
    );
};

function Contact() {


    const form = useRef();
    const [toast, setToast] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    
    const  sendEmail = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        try{

            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            // console.log("Email sent successfully:", result.text);
            setToast({ message: "Message sent successfully! Thank you!", type: "success" });
            form.current.reset();

        } catch (error) {
            // console.error("Error sending email:", error.message || error);
            setToast({ message: "Failed to send message. Please try again.", type: "error" });
        }
        finally {
            setIsSubmitting(false);
            setTimeout(() => setToast(null), 10000);
        };

    }
    
    return( 
        <Layout>
             {/* hero section */}
             <section className="hero-section-small parent contact-section">
                <div className="relative z-[100] hero-section-small-content">
                    <h1>Contact Us</h1>
                    <p>We're here to answer your questions and help you achieve your financial goals.</p>
                </div>
            </section>

            {/* form section  */}
            <section className="contact-form-section text-center parent" id="contact-us">

                <div className="contact-info-body w-full"  data-aos='fade-up' data-aos-easing="ease-in-out"> 
                    
                    <p>Have questions about our services or investment approach? Whether it's about our investment strategies, market insights, or how we can tailor our services to your needs, we're here to help. Please feel free to reach out to us, our team is always ready for a meaningful conversation.
                        Thank you for visiting our site. We look forward to connecting with you and discussing how we can support your financial goals!
                    </p>

                </div>

                <div className="contact-form-body w-full"  data-aos='fade-up' data-aos-easing="ease-in-out">

                    <form ref={form} onSubmit={sendEmail} method="POST">
                        <input required type="hidden" name="title" value='Message from Yun Contact Form'/>
                        <input required type="text" name="name" placeholder="Name"/>
                        <input required type="email" name="email" placeholder="Email"/>
                        <input required type="tel" name="tel" placeholder="Phone (Optional)"/>
                        <textarea name="message"  placeholder="Additional Message" className="pt-[10px]"></textarea>
                        <button type="submit" disabled={isSubmitting}> {isSubmitting ? (
                            <img src={loader} alt="Loading..." />
                        ) : ("Send Message" )}</button>

                        
                    </form>
                    
                </div>

                {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

            </section>

              {/* <!-- Contact Info Section --> */}
            <section className="contact-info"  data-aos='fade-up' data-aos-easing="ease-in-out">
                <h3>Reach Out Directly</h3>
                <p>Email: <a href="mailto:info@yuncapital.com">info@yuncapital.com</a></p>
                <p>Phone: 212.877.3920</p>
                <p>Address: 110 59th Street Suite 3200 New York, NY 10022</p>
            </section>
    </Layout>  
          
    )
};

export default Contact