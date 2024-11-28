import React from 'react'
import Link from 'next/link'
import Image from "next/image"


export default function Portfolio() {
  return (
     <>
     <section className="portfolio" id='portfolio'>
        <div className="port-head-sec">
          <h1 className="portfolio-heading">
            OUR <span className="green-text">PORTFOLIO</span>
          </h1>
          <p className="portfolio-para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            aliquid amet consectetur adipisicing elit. Quaerat, error.
          </p>
        </div>
        <div className="portfolio-nav">
          <ul className="portfolio-list">
            <li>
              <Link className="port-link" href={"#"}>
                WEB DESIGN
              </Link>
            </li>
            <li>
              <Link className="port-link" href={"#"}>
                GRAPHIC DESIGN
              </Link>
            </li>
            <li>
              <Link className="port-link" href={"#"}>
                BRANDING
              </Link>
            </li>
            <li>
              <Link className="port-link" href={"#"}>
                LOGO
              </Link>
            </li>
            <li>
              <Link className="port-link" href={"#"}>
                MARKETING
              </Link>
            </li>
            <li>
              <Link className="port-link" href={"#"}>
                ADVERTISEMENT
              </Link>
            </li>
          </ul>
        </div>
        <div className="portfolio-images-container" id='portfolio'>
          <div className="portfolio-image">
            <Image src={'/Images/h1.png'} alt='Portfolio Image' width={220} height={170}/></div>
          <div className="portfolio-image"> <Image src={'/assets/h2.png'} alt='Portfolio Image' width={220} height={170}/></div>
          <div className="portfolio-image"> <Image src={'/Images/h3.png'} alt='Portfolio Image' width={220} height={170}/></div>
          <div className="portfolio-image"> <Image src={'/Images/h4.png'} alt='Portfolio Image' width={220} height={170}/></div>
          <div className="portfolio-image"> <Image src={'/Images/h5.png'} alt='Portfolio Image' width={220} height={170}/></div>
          <div className="portfolio-image"> <Image src={'/Images/h6.png'} alt='Portfolio Image' width={220} height={170}/></div>
          <div className="portfolio-image"> <Image src={'/Images/h7.png'} alt='Portfolio Image' width={220} height={170}/></div>
          <div className="portfolio-image"> <Image src={'/Images/h8.png'} alt='Portfolio Image' width={220} height={170}/></div>
          <div className="portfolio-image"> <Image src={'/Images/h9.png'} alt='Portfolio Image' width={220} height={170}/></div>
          <div className="portfolio-image"> <Image src={'/Images/h10.png'} alt='Portfolio Image' width={220} height={170}/></div>
        </div>
      </section>
     </>
  )
}
