import React from "react";
import Image from "next/image";

export default function Advantages() {
  return (
    <>
      <section className="advantages-section" id="advantages">
        <div className="advantages-content">
          <h1>
            OUR <span className="green-text">AVDANTAGES </span>{" "}
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sint
            suscipitdelectus harum nostrum non quae sapiente, omnis cumque non
            quae sapiente,?
          </p>
        </div>
        {/*---------------------- 2nd part of advantages section ---------------------- */}
        <div className="advantages-items">
          {/* --------------- item 1 -------------- */}
           <div className="adv-item-container">
          {/* --------------------- Image part-------------- */}

            <div className="image">
              <Image
                src={
                  "https://sevensol.com/wp-content/uploads/2022/10/innovation.png"
                }
                alt=""
                width={120}
                height={120}
              ></Image>
              </div>
{/* ---------------------- Heading and para -------------------------------------- */}
<div>
              <h3>INOVATION</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                aspernatur.
              </p>
            </div>
            
          </div> 
          {/* --------------- item 2 -------------- */}
           <div className="adv-item-container">
          {/* --------------------- Image part-------------- */}
           <div className="image">
             <Image
                src="https://sevensol.com/wp-content/uploads/2022/10/quality.png"
                alt="Quality"
                width={120}
                height={120}
              ></Image>
             </div>
      {/* ------------------- heading and para --------------- */}

              <div>
              <h3>QUALITY</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                aspernatur.
              </p>
              </div> 
            </div> 
          {/* --------------- item 3 -------------- */}
          <div className="adv-item-container">
            {/* ------------------- Image part ------------------------ */}
            <div className="image">
              <Image
                src="https://sevensol.com/wp-content/uploads/2022/10/experience.png"
                alt="Experience"
                width={120}
                height={120}
              ></Image>
               </div>
      {/* ------------------- heading and para -------------*/}
               <div>
              <h3>EXPERIENCE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                aspernatur.
              </p>
            </div>
          </div>
          {/* --------------- item 4 -------------- */}
          <div className="adv-item-container">
            {/* ----------------- Image part  ---------------------- */}
            <div className="image">
              <Image
                src="https://sevensol.com/wp-content/uploads/2022/10/happy-clients.png"
                alt="Happy Clients"
                width={120}
                height={120}
              ></Image>
             </div>
             {/* --------------------- heading and para -------------- */}
             <div>
              <h3>HAPPY CLIENTS</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                aspernatur.
              </p>
            </div>
          </div>
          {/* --------------- item 5 -------------- */}
          <div className="adv-item-container">
            {/* --------------- Image part ------------- */}
            <div className="item">
              <Image
                src="https://sevensol.com/wp-content/uploads/2022/10/support.png"
                alt="Happy Clients"
                width={120}
                height={120}
              ></Image>
              </div>
              {/* -------------------- Head and para   -------------- */}
              <div>
              <h3>SUPPORT</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                aspernatur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
