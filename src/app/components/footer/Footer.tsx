import React from 'react'
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-items-container">
        <div className="pana-logo-container">
         <div className="panaLogo-para">
              <h2  className='footer-logo'> 
             <Link href={"#"}>
             <Image
              src={"/Images/panaLogo-footer.png"}
              alt=""
              width={120}
              height={60}
            />
            </Link>
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aliquid iure. Hic expedita ab laboriosam ducimus error saepe vitae.</p>
          </div>
          <p className="copyright">	&#169; GIAIC 2024</p>
        </div>
        <div className="footer-services"> 
            <ul>
              <li><h2 className='footer-services-head'>SERVICES</h2></li>
              <li>Shahab</li>
              <li>Shahab</li>
              <li>Shahab</li>
              <li>Shahab</li>
              <li>Shahab</li>
              <li>Shahab</li>
              <li>Shahab</li>
            </ul>
        </div>
        <div className="footer-line"></div>

        <div className="footer-links"> 
          <ul>
            <li><h2 className='footer-links-head'>USEFUL LINKS</h2></li>
            <li>Shahab</li>
            <li>Shahab</li>
            <li>Shahab</li>
            <li>Shahab</li>
            <li>Shahab</li>
            <li>Shahab</li>
            <li>Shahab</li>
          </ul>
      </div>
      <div className="footer-line"></div>

      <div className="footer-contacts"> 
        <ul>
          <li><h2 className='footer-contacts-head'>CONTACTS</h2></li>
          <li><i className="bi-footer bi-telephone-fill"/> +92-302-2187590</li>
          <li><i className="bi-footer bi-telephone-fill"/> +92-304-3917508</li>
          <li><i className="bi-footer bi-envelope"></i> bhuttoshahab9@gmail.com</li>
         
          <li><h2 className='follow-links-head'>FOLLOW US</h2>
          <ul className="follow-links">
          <li>  <Link href={"https://www.facebook.com/shahabuddin.bhutto.963"} target="_blank">
            <i className="ai bi-facebook"></i>{" "}
          </Link>
          <Link href={"https://x.com/Shahabu94082969"} target="_blank">
          <i className="ai bi-twitter-x"></i>{" "}
          </Link>
          <Link href={"https://en.wikipedia.org/wiki/Google%2B"} target="_blank">
            <i className="ai bi-google"></i>{" "}
          </Link>
          <Link href={"https://www.linkedin.com/in/shahab-ud-din-7547762b9/"} target="_blank">
            <i className="ai bi-linkedin"></i>{" "}
          </Link>
          <Link href={"https://www.youtube.com"} target="_blank">
            <i className="ai bi-youtube"></i>{" "}
          </Link></li>
        </ul>
          </li>
        </ul>
      
    </div>
    </div>
      </footer>

    </>
  )
}
