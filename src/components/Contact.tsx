import { useEffect, useRef } from "react";
import { MdCopyright, MdEmail, MdSchool } from "react-icons/md";
import { TbNotes, TbSend } from "react-icons/tb";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Contact.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });
      
      tl.from(".contact-bg-text", {
        opacity: 0,
        scale: 0.95,
        duration: 1.5,
        ease: "power3.out"
      })
      .from(".contact-heading-container > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=1")
      .from(".contact-info-block", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.6")
      .from(".contact-signature", {
        opacity: 0,
        x: 30,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .from(".contact-actions > *", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.6")
      .from(".contact-footer", {
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.4");
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="contact-section section-container" id="contact" ref={sectionRef}>
      <div className="contact-glow-cyan"></div>
      <div className="contact-glow-purple"></div>
      
      <div className="contact-bg-text">CONTACT</div>
      
      <div className="contact-container">
        <div className="contact-content-grid">
          <div className="contact-left">
            <div className="contact-heading-container">
              <span className="contact-eyebrow">GET IN TOUCH</span>
              <h2 className="contact-heading">
                <span className="text-light">LET'S CREATE</span><br/>
                <span className="text-cyan">SOMETHING</span>{" "}
                <span className="text-purple">MEANINGFUL.</span>
              </h2>
              <p className="contact-description">
                I'm always open to interesting conversations,<br/>
                collaborations, or new opportunities.
              </p>
            </div>
            
            <div className="contact-info-wrapper">
              <div className="contact-info-block">
                <div className="contact-icon-wrapper cyan-icon">
                  <MdEmail />
                </div>
                <div>
                  <h4>EMAIL</h4>
                  <p>
                    <a href="mailto:dickenbagrecha18@gmail.com" data-cursor="disable">
                      dickenbagrecha18@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="contact-info-block">
                <div className="contact-icon-wrapper purple-icon">
                  <MdSchool />
                </div>
                <div>
                  <h4>EDUCATION</h4>
                  <p>BE in Computer Science and Engineering -<br/>Artificial Intelligence and Machine Learning</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-right">
            <div className="contact-signature">
              Dicken Kumar K
            </div>
            
            <div className="contact-actions">
              <a 
                href="mailto:dickenbagrecha18@gmail.com" 
                className="btn-send-message"
                data-cursor="disable"
              >
                <span>Send a Message</span>
                <TbSend className="send-icon" />
              </a>
              
              <a href="#" className="btn-resume" data-cursor="disable">
                <span>RESUME</span>
                <TbNotes />
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-footer">
          <div className="footer-credits">
            <span>Designed & Developed</span><br/>
            <span>by <span className="text-cyan">Dicken Kumar K</span></span>
          </div>
          <div className="footer-copyright">
            <MdCopyright /> 2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
