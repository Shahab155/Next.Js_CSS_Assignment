import React from 'react'
import Link from 'next/link'

export default function Services() {
  return (
    <>
    <section className="services-section" id='services'>
        {/* ------------------ 1st part of services --------------------- */}
        <div className="services-head-sec">
          <h1 className="services-heading">
            {" "}
            OUR <span className="green-text">SERVICES</span>
          </h1>

          <p className="services-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            explicabo quisquam nam voluptates. Lorem ipsum dolor sit.
          </p>
        </div>

        {/* ---------------2nd part of services --------------------- */}
        <div className="services-items">
          {/* --- serives item 1 */}
          <div className="item-container">
            <div className="services-image">
            <i className="bi bi-star-fill"></i>
            </div>
            <div>
              <h3>WEB DESIGN</h3>
              <p className='serv-part2-para'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
                tempora?
              </p>
            </div>
            <p>
              <Link href={"#"} className="serv-link">
                read more
              </Link>
            </p>
          </div>
          {/* --- serives item 2 */}
          <div className="item-container">
            <div className="services-image">
            <i className="bi bi-star-fill"></i>
            </div>
            <div>
              <h3>GRAPHIC DESIGN</h3>
              <p className='serv-part2-para'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
                tempora?
              </p>
            </div>
            <p>
              <Link href={"#"} className="serv-link">
                read more
              </Link>
            </p>
          </div>
          {/* --- serives item 3 */}
          <div className="item-container">
            <div className="services-image">
            <i className="bi bi-star-fill"></i>
            </div>
            <div>
              <h3>BRANDING </h3>
              <p className='serv-part2-para'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
                tempora?
              </p>
            </div>
            <p>
              <Link href={"#"} className="serv-link">
                read more
              </Link>
            </p>
          </div>
          {/* --- serives item 4 ---*/}
          <div className="item-container">
            <div className="services-image">
            <i className="bi bi-star-fill"></i>
            </div>
            <div>
              <h3>MARKETING</h3>
              <p className='serv-part2-para'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
                tempora?
              </p>
            </div>
            <p>
              <Link href={"#"} className="serv-link">
                read more
              </Link>
            </p>
          </div>
         
        </div>
      </section>
    </>
  )
}
