import React from 'react'
import Image from "next/image"

export default function Advantages() {
  return (
    <>
    <section className="advantages-section" id='advantages'>
        <div className="advantages-head-part">
          <h1 className='advantage-heading'>
            OUR <span className="green-text">AVDANTAGES </span>
          </h1>
          <p className="adv-para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sint
            suscipitdelectus harum nostrum non quae sapiente, omnis cumque non
            quae sapiente,?
          </p>
        </div>
        {/*---------------------- 2nd part of advantages section ---------------------- */}
        <div className="advantages-items">
          {/* --------------- item 1 -------------- */}
          <div className="adv-item-container">
            <div className="box box1">
              <Image src={"https://sevensol.com/wp-content/uploads/2022/10/innovation.png"} alt="" width={100} height={100}></Image>
            </div>
            <div>
              <h4>INOVATION</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                aspernatur.
              </p>
            </div>
          </div>
          {/* --------------- item 2 -------------- */}
          <div className="adv-item-container">
            <div className="box box1">
              <Image src="https://sevensol.com/wp-content/uploads/2022/10/quality.png" alt="Quality" width={100} height={100}></Image>
            </div>
            <div>
              <h4>QUALITY</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                aspernatur.
              </p>
            </div>
          </div>
          {/* --------------- item 3 -------------- */}
          <div className="adv-item-container">
            <div className="box box1">
              <Image  src="https://sevensol.com/wp-content/uploads/2022/10/experience.png" alt="Experience" width={100} height={100}></Image>
            </div>
            <div>
              <h4>EXPERIENCE</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                aspernatur.
              </p>
            </div>
          </div>
          {/* --------------- item 4 -------------- */}
          <div className="adv-item-container">
            <div className="box box1">
              <Image src="https://sevensol.com/wp-content/uploads/2022/10/happy-clients.png" alt="Happy Clients" width={100} height={100}></Image>
            </div>
            <div>
              <h4>HAPPY CLIENTS</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                aspernatur.
              </p>
            </div>
          </div>
          {/* --------------- item 5 -------------- */}
          <div className="adv-item-container">
            <div className="box box1">
              <Image  src="https://sevensol.com/wp-content/uploads/2022/10/support.png" alt="Happy Clients" width={100} height={100}></Image>
            </div>
            <div>
              <h4>SUPPORT</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                aspernatur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


